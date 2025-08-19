"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const meta_service_1 = require("./meta.service");
const users_service_1 = require("../users/users.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const meta_auth_dto_1 = require("./dto/meta-auth.dto");
const meta_campaign_dto_1 = require("./dto/meta-campaign.dto");
const meta_adset_dto_1 = require("./dto/meta-adset.dto");
const meta_ad_dto_1 = require("./dto/meta-ad.dto");
const meta_account_dto_1 = require("./dto/meta-account.dto");
let MetaController = class MetaController {
    constructor(metaService, usersService) {
        this.metaService = metaService;
        this.usersService = usersService;
    }
    getAuthUrl(query) {
        return {
            authUrl: this.metaService.generateAuthUrl(query.redirect_uri, query.state),
        };
    }
    async connectMeta(req, connectDto) {
        const { code, redirectUri } = connectDto;
        const tokenData = await this.metaService.exchangeCodeForToken(code, redirectUri);
        const userInfo = await this.metaService.getUserInfo(tokenData.access_token);
        const expiresAt = new Date();
        expiresAt.setSeconds(expiresAt.getSeconds() + tokenData.expires_in);
        const updatedUser = await this.usersService.updateMetaIntegration(req.user.userId, {
            metaAccessToken: tokenData.access_token,
            metaTokenExpiresAt: expiresAt,
            metaUserId: userInfo.id,
        });
        return {
            success: true,
            user: updatedUser,
            metaUser: userInfo,
        };
    }
    async getAdAccounts(req) {
        const accounts = await this.metaService.getAdAccounts(req.user.userId);
        return { data: accounts };
    }
    async setAdAccount(req, updateDto) {
        const updatedUser = await this.usersService.updateMetaIntegration(req.user.userId, {
            metaAdAccountId: updateDto.adAccountId,
        });
        return {
            success: true,
            user: updatedUser,
        };
    }
    async getConnectionStatus(req) {
        const user = await this.usersService.findById(req.user.userId);
        if (!user?.metaAccessToken) {
            return {
                connected: false,
                message: 'Meta account not connected',
            };
        }
        const validation = await this.metaService.validateAccessToken(user.metaAccessToken);
        return {
            connected: validation.valid,
            user: validation.valid ? validation.data : null,
            adAccountId: user.metaAdAccountId,
            error: validation.valid ? null : validation.error,
        };
    }
    async createCampaign(req, campaignDto) {
        const user = await this.usersService.findById(req.user.userId);
        if (!user?.metaAdAccountId) {
            throw new Error('No ad account selected. Please select an ad account first.');
        }
        return this.metaService.createCampaign(req.user.userId, user.metaAdAccountId.replace('act_', ''), campaignDto);
    }
    async createAdSet(req, adSetDto) {
        const user = await this.usersService.findById(req.user.userId);
        if (!user?.metaAdAccountId) {
            throw new Error('No ad account selected. Please select an ad account first.');
        }
        return this.metaService.createAdSet(req.user.userId, user.metaAdAccountId.replace('act_', ''), adSetDto);
    }
    async createAdCreative(req, creativeDto) {
        const user = await this.usersService.findById(req.user.userId);
        if (!user?.metaAdAccountId) {
            throw new Error('No ad account selected. Please select an ad account first.');
        }
        return this.metaService.createAdCreative(req.user.userId, user.metaAdAccountId.replace('act_', ''), creativeDto);
    }
    async createAd(req, adDto) {
        const user = await this.usersService.findById(req.user.userId);
        if (!user?.metaAdAccountId) {
            throw new Error('No ad account selected. Please select an ad account first.');
        }
        return this.metaService.createAd(req.user.userId, user.metaAdAccountId.replace('act_', ''), adDto);
    }
    async getCampaignInsights(req, campaignId, query) {
        const dateRange = query.since && query.until ? { since: query.since, until: query.until } : undefined;
        return this.metaService.getCampaignInsights(req.user.userId, campaignId, dateRange);
    }
    async updateCampaignStatus(req, campaignId, statusDto) {
        return this.metaService.updateCampaignStatus(req.user.userId, campaignId, statusDto.status);
    }
    async refreshToken(req) {
        return this.metaService.refreshMetaToken(req.user.userId);
    }
    async disconnectMeta(req) {
        const updatedUser = await this.usersService.updateMetaIntegration(req.user.userId, {
            metaAccessToken: null,
            metaRefreshToken: null,
            metaTokenExpiresAt: null,
            metaUserId: null,
            metaAdAccountId: null,
        });
        return {
            success: true,
            message: 'Meta account disconnected successfully',
            user: updatedUser,
        };
    }
};
exports.MetaController = MetaController;
__decorate([
    (0, common_1.Get)('auth-url'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Meta OAuth authorization URL' }),
    (0, swagger_1.ApiQuery)({ name: 'redirect_uri', description: 'OAuth callback URL', example: 'http://localhost:3000/auth/meta/callback' }),
    (0, swagger_1.ApiQuery)({ name: 'state', description: 'State parameter for OAuth security', required: false }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Authorization URL generated successfully',
        type: meta_auth_dto_1.MetaAuthUrlResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [meta_auth_dto_1.MetaAuthUrlDto]),
    __metadata("design:returntype", meta_auth_dto_1.MetaAuthUrlResponseDto)
], MetaController.prototype, "getAuthUrl", null);
__decorate([
    (0, common_1.Post)('connect'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Connect Meta account using OAuth code' }),
    (0, swagger_1.ApiBody)({ type: meta_auth_dto_1.ConnectMetaDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Meta account connected successfully',
        type: meta_auth_dto_1.MetaConnectionResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid authorization code or configuration error',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, meta_auth_dto_1.ConnectMetaDto]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "connectMeta", null);
__decorate([
    (0, common_1.Get)('ad-accounts'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user\'s Meta ad accounts' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Ad accounts retrieved successfully',
        type: meta_account_dto_1.MetaAdAccountsResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Meta access token not found or invalid',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "getAdAccounts", null);
__decorate([
    (0, common_1.Post)('ad-account'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Set active Meta ad account' }),
    (0, swagger_1.ApiBody)({ type: meta_auth_dto_1.UpdateAdAccountDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Ad account updated successfully',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, meta_auth_dto_1.UpdateAdAccountDto]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "setAdAccount", null);
__decorate([
    (0, common_1.Get)('connection-status'),
    (0, swagger_1.ApiOperation)({ summary: 'Check Meta account connection status' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Connection status retrieved successfully',
        type: meta_auth_dto_1.MetaConnectionStatusDto,
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "getConnectionStatus", null);
__decorate([
    (0, common_1.Post)('campaigns'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Meta campaign' }),
    (0, swagger_1.ApiBody)({ type: meta_campaign_dto_1.CreateCampaignDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Campaign created successfully',
        type: meta_campaign_dto_1.CampaignResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid campaign data or Meta API error',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, meta_campaign_dto_1.CreateCampaignDto]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "createCampaign", null);
__decorate([
    (0, common_1.Post)('adsets'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Meta ad set' }),
    (0, swagger_1.ApiBody)({ type: meta_adset_dto_1.CreateAdSetDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Ad set created successfully',
        type: meta_adset_dto_1.AdSetResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid ad set data or Meta API error',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, meta_adset_dto_1.CreateAdSetDto]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "createAdSet", null);
__decorate([
    (0, common_1.Post)('adcreatives'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Meta ad creative' }),
    (0, swagger_1.ApiBody)({ type: meta_ad_dto_1.CreateAdCreativeDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Ad creative created successfully',
        type: meta_ad_dto_1.AdCreativeResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid creative data or Meta API error',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, meta_ad_dto_1.CreateAdCreativeDto]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "createAdCreative", null);
__decorate([
    (0, common_1.Post)('ads'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Meta ad' }),
    (0, swagger_1.ApiBody)({ type: meta_ad_dto_1.CreateAdDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Ad created successfully',
        type: meta_ad_dto_1.AdResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid ad data or Meta API error',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, meta_ad_dto_1.CreateAdDto]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "createAd", null);
__decorate([
    (0, common_1.Get)('campaigns/:id/insights'),
    (0, swagger_1.ApiOperation)({ summary: 'Get campaign performance insights' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Campaign ID' }),
    (0, swagger_1.ApiQuery)({ name: 'since', description: 'Start date (YYYY-MM-DD)', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'until', description: 'End date (YYYY-MM-DD)', required: false }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Campaign insights retrieved successfully',
        type: meta_campaign_dto_1.CampaignInsightsDto,
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, meta_campaign_dto_1.CampaignInsightsQueryDto]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "getCampaignInsights", null);
__decorate([
    (0, common_1.Post)('campaigns/:id/status'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update campaign status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Campaign ID' }),
    (0, swagger_1.ApiBody)({ type: meta_campaign_dto_1.UpdateCampaignStatusDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Campaign status updated successfully',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, meta_campaign_dto_1.UpdateCampaignStatusDto]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "updateCampaignStatus", null);
__decorate([
    (0, common_1.Post)('refresh-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh Meta access token' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Token refreshed successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Failed to refresh token',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Post)('disconnect'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Disconnect Meta account' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Meta account disconnected successfully',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "disconnectMeta", null);
exports.MetaController = MetaController = __decorate([
    (0, swagger_1.ApiTags)('Meta Ads API'),
    (0, common_1.Controller)('meta'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [meta_service_1.MetaService,
        users_service_1.UsersService])
], MetaController);
//# sourceMappingURL=meta.controller.js.map