import { Controller, Get, Post, Body, Query, UseGuards, Request, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery, ApiBody } from '@nestjs/swagger';
import { MetaService } from './meta.service';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
    ConnectMetaDto,
    MetaAuthUrlDto,
    UpdateAdAccountDto,
    MetaAuthUrlResponseDto,
    MetaConnectionResponseDto,
    MetaConnectionStatusDto
} from './dto/meta-auth.dto';
import {
    CreateCampaignDto,
    UpdateCampaignStatusDto,
    CampaignInsightsQueryDto,
    CampaignResponseDto,
    CampaignInsightsDto
} from './dto/meta-campaign.dto';
import { CreateAdSetDto, AdSetResponseDto } from './dto/meta-adset.dto';
import { CreateAdDto, CreateAdCreativeDto, AdResponseDto, AdCreativeResponseDto } from './dto/meta-ad.dto';
import { MetaAdAccountsResponseDto } from './dto/meta-account.dto';

@ApiTags('Meta Ads API')
@Controller('meta')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('access-token')
export class MetaController {
    constructor(
        private readonly metaService: MetaService,
        private readonly usersService: UsersService,
    ) { }

    @Get('auth-url')
    @ApiOperation({ summary: 'Get Meta OAuth authorization URL' })
    @ApiQuery({ name: 'redirect_uri', description: 'OAuth callback URL', example: 'http://localhost:3000/auth/meta/callback' })
    @ApiQuery({ name: 'state', description: 'State parameter for OAuth security', required: false })
    @ApiResponse({
        status: 200,
        description: 'Authorization URL generated successfully',
        type: MetaAuthUrlResponseDto,
    })
    getAuthUrl(@Query() query: MetaAuthUrlDto): MetaAuthUrlResponseDto {
        return {
            authUrl: this.metaService.generateAuthUrl(query.redirect_uri, query.state),
        };
    }

    @Post('connect')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Connect Meta account using OAuth code' })
    @ApiBody({ type: ConnectMetaDto })
    @ApiResponse({
        status: 200,
        description: 'Meta account connected successfully',
        type: MetaConnectionResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid authorization code or configuration error',
    })
    async connectMeta(@Request() req, @Body() connectDto: ConnectMetaDto): Promise<MetaConnectionResponseDto> {
        const { code, redirectUri } = connectDto;

        // Exchange code for access token
        const tokenData = await this.metaService.exchangeCodeForToken(code, redirectUri);

        // Get user info from Meta
        const userInfo = await this.metaService.getUserInfo(tokenData.access_token);

        // Calculate token expiration
        const expiresAt = new Date();
        expiresAt.setSeconds(expiresAt.getSeconds() + tokenData.expires_in);

        // Update user with Meta credentials
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

    @Get('ad-accounts')
    @ApiOperation({ summary: 'Get user\'s Meta ad accounts' })
    @ApiResponse({
        status: 200,
        description: 'Ad accounts retrieved successfully',
        type: MetaAdAccountsResponseDto,
    })
    @ApiResponse({
        status: 401,
        description: 'Meta access token not found or invalid',
    })
    async getAdAccounts(@Request() req) {
        const accounts = await this.metaService.getAdAccounts(req.user.userId);
        return { data: accounts };
    }

    @Post('ad-account')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Set active Meta ad account' })
    @ApiBody({ type: UpdateAdAccountDto })
    @ApiResponse({
        status: 200,
        description: 'Ad account updated successfully',
    })
    async setAdAccount(@Request() req, @Body() updateDto: UpdateAdAccountDto) {
        const updatedUser = await this.usersService.updateMetaIntegration(req.user.userId, {
            metaAdAccountId: updateDto.adAccountId,
        });

        return {
            success: true,
            user: updatedUser,
        };
    }

    @Get('connection-status')
    @ApiOperation({ summary: 'Check Meta account connection status' })
    @ApiResponse({
        status: 200,
        description: 'Connection status retrieved successfully',
        type: MetaConnectionStatusDto,
    })
    async getConnectionStatus(@Request() req): Promise<MetaConnectionStatusDto> {
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

    @Post('campaigns')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new Meta campaign' })
    @ApiBody({ type: CreateCampaignDto })
    @ApiResponse({
        status: 201,
        description: 'Campaign created successfully',
        type: CampaignResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid campaign data or Meta API error',
    })
    async createCampaign(@Request() req, @Body() campaignDto: CreateCampaignDto) {
        const user = await this.usersService.findById(req.user.userId);
        if (!user?.metaAdAccountId) {
            throw new Error('No ad account selected. Please select an ad account first.');
        }

        return this.metaService.createCampaign(req.user.userId, user.metaAdAccountId.replace('act_', ''), campaignDto);
    }

    @Post('adsets')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new Meta ad set' })
    @ApiBody({ type: CreateAdSetDto })
    @ApiResponse({
        status: 201,
        description: 'Ad set created successfully',
        type: AdSetResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid ad set data or Meta API error',
    })
    async createAdSet(@Request() req, @Body() adSetDto: CreateAdSetDto) {
        const user = await this.usersService.findById(req.user.userId);
        if (!user?.metaAdAccountId) {
            throw new Error('No ad account selected. Please select an ad account first.');
        }

        return this.metaService.createAdSet(req.user.userId, user.metaAdAccountId.replace('act_', ''), adSetDto);
    }

    @Post('adcreatives')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new Meta ad creative' })
    @ApiBody({ type: CreateAdCreativeDto })
    @ApiResponse({
        status: 201,
        description: 'Ad creative created successfully',
        type: AdCreativeResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid creative data or Meta API error',
    })
    async createAdCreative(@Request() req, @Body() creativeDto: CreateAdCreativeDto) {
        const user = await this.usersService.findById(req.user.userId);
        if (!user?.metaAdAccountId) {
            throw new Error('No ad account selected. Please select an ad account first.');
        }

        return this.metaService.createAdCreative(req.user.userId, user.metaAdAccountId.replace('act_', ''), creativeDto);
    }

    @Post('ads')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new Meta ad' })
    @ApiBody({ type: CreateAdDto })
    @ApiResponse({
        status: 201,
        description: 'Ad created successfully',
        type: AdResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid ad data or Meta API error',
    })
    async createAd(@Request() req, @Body() adDto: CreateAdDto) {
        const user = await this.usersService.findById(req.user.userId);
        if (!user?.metaAdAccountId) {
            throw new Error('No ad account selected. Please select an ad account first.');
        }

        return this.metaService.createAd(req.user.userId, user.metaAdAccountId.replace('act_', ''), adDto);
    }

    @Get('campaigns/:id/insights')
    @ApiOperation({ summary: 'Get campaign performance insights' })
    @ApiParam({ name: 'id', description: 'Campaign ID' })
    @ApiQuery({ name: 'since', description: 'Start date (YYYY-MM-DD)', required: false })
    @ApiQuery({ name: 'until', description: 'End date (YYYY-MM-DD)', required: false })
    @ApiResponse({
        status: 200,
        description: 'Campaign insights retrieved successfully',
        type: CampaignInsightsDto,
    })
    async getCampaignInsights(
        @Request() req,
        @Param('id') campaignId: string,
        @Query() query: CampaignInsightsQueryDto,
    ) {
        const dateRange = query.since && query.until ? { since: query.since, until: query.until } : undefined;
        return this.metaService.getCampaignInsights(req.user.userId, campaignId, dateRange);
    }

    @Post('campaigns/:id/status')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update campaign status' })
    @ApiParam({ name: 'id', description: 'Campaign ID' })
    @ApiBody({ type: UpdateCampaignStatusDto })
    @ApiResponse({
        status: 200,
        description: 'Campaign status updated successfully',
    })
    async updateCampaignStatus(
        @Request() req,
        @Param('id') campaignId: string,
        @Body() statusDto: UpdateCampaignStatusDto,
    ) {
        return this.metaService.updateCampaignStatus(req.user.userId, campaignId, statusDto.status);
    }

    @Post('refresh-token')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Refresh Meta access token' })
    @ApiResponse({
        status: 200,
        description: 'Token refreshed successfully',
    })
    @ApiResponse({
        status: 401,
        description: 'Failed to refresh token',
    })
    async refreshToken(@Request() req) {
        return this.metaService.refreshMetaToken(req.user.userId);
    }

    @Post('disconnect')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Disconnect Meta account' })
    @ApiResponse({
        status: 200,
        description: 'Meta account disconnected successfully',
    })
    async disconnectMeta(@Request() req) {
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
}