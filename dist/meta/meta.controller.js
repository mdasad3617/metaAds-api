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
const meta_service_1 = require("./meta.service");
const users_service_1 = require("../users/users.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const class_validator_1 = require("class-validator");
class ConnectMetaDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConnectMetaDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConnectMetaDto.prototype, "redirectUri", void 0);
class UpdateAdAccountDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAdAccountDto.prototype, "adAccountId", void 0);
let MetaController = class MetaController {
    constructor(metaService, usersService) {
        this.metaService = metaService;
        this.usersService = usersService;
    }
    getAuthUrl(redirectUri, state) {
        return {
            authUrl: this.metaService.generateAuthUrl(redirectUri, state),
        };
    }
    async connectMeta(req, connectDto) {
        const { code, redirectUri } = connectDto;
        const tokenData = await this.metaService.exchangeCodeForToken(code, redirectUri);
        const userInfo = await this.metaService.getUserInfo(tokenData.access_token);
        const updatedUser = await this.usersService.updateMetaIntegration(req.user.userId, {
            metaAccessToken: tokenData.access_token,
            metaUserId: userInfo.id,
        });
        return {
            success: true,
            user: updatedUser,
            metaUser: userInfo,
        };
    }
    async getAdAccounts(req) {
        return this.metaService.getAdAccounts(req.user.userId);
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
    async getCampaignInsights(req, campaignId, since, until) {
        const dateRange = since && until ? { since, until } : undefined;
        return this.metaService.getCampaignInsights(req.user.userId, campaignId, dateRange);
    }
    async updateCampaignStatus(req, campaignId, status) {
        return this.metaService.updateCampaignStatus(req.user.userId, campaignId, status);
    }
    async disconnectMeta(req) {
        const updatedUser = await this.usersService.updateMetaIntegration(req.user.userId, {
            metaAccessToken: null,
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
    __param(0, (0, common_1.Query)('redirect_uri')),
    __param(1, (0, common_1.Query)('state')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MetaController.prototype, "getAuthUrl", null);
__decorate([
    (0, common_1.Post)('connect'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ConnectMetaDto]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "connectMeta", null);
__decorate([
    (0, common_1.Get)('ad-accounts'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "getAdAccounts", null);
__decorate([
    (0, common_1.Post)('ad-account'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateAdAccountDto]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "setAdAccount", null);
__decorate([
    (0, common_1.Get)('connection-status'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "getConnectionStatus", null);
__decorate([
    (0, common_1.Get)('campaigns/:id/insights'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)('since')),
    __param(3, (0, common_1.Query)('until')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "getCampaignInsights", null);
__decorate([
    (0, common_1.Post)('campaigns/:id/status'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "updateCampaignStatus", null);
__decorate([
    (0, common_1.Post)('disconnect'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MetaController.prototype, "disconnectMeta", null);
exports.MetaController = MetaController = __decorate([
    (0, common_1.Controller)('meta'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [meta_service_1.MetaService,
        users_service_1.UsersService])
], MetaController);
//# sourceMappingURL=meta.controller.js.map