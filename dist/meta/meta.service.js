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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const users_service_1 = require("../users/users.service");
const axios_1 = require("axios");
let MetaService = class MetaService {
    constructor(configService, usersService) {
        this.configService = configService;
        this.usersService = usersService;
        const apiVersion = this.configService.get('META_API_VERSION', 'v19.0');
        this.metaApiUrl = `https://graph.facebook.com/${apiVersion}`;
    }
    async getMetaHeaders(userId) {
        const user = await this.usersService.findById(userId);
        if (!user?.metaAccessToken) {
            throw new common_1.UnauthorizedException('Meta access token not found. Please connect your Facebook account.');
        }
        return {
            'Authorization': `Bearer ${user.metaAccessToken}`,
            'Content-Type': 'application/json',
        };
    }
    async exchangeCodeForToken(code, redirectUri) {
        const appId = this.configService.get('META_APP_ID');
        const appSecret = this.configService.get('META_APP_SECRET');
        if (!appId || !appSecret) {
            throw new common_1.BadRequestException('Meta app credentials not configured');
        }
        try {
            const response = await axios_1.default.get(`${this.metaApiUrl}/oauth/access_token`, {
                params: {
                    client_id: appId,
                    client_secret: appSecret,
                    redirect_uri: redirectUri,
                    code: code,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error('Error exchanging code for token:', error.response?.data || error.message);
            throw new common_1.BadRequestException('Failed to exchange authorization code for access token');
        }
    }
    async getUserInfo(accessToken) {
        try {
            const response = await axios_1.default.get(`${this.metaApiUrl}/me`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                params: {
                    fields: 'id,name,email',
                },
            });
            return response.data;
        }
        catch (error) {
            console.error('Error getting user info:', error.response?.data || error.message);
            throw new common_1.BadRequestException('Failed to get user information from Meta');
        }
    }
    async getAdAccounts(userId) {
        const headers = await this.getMetaHeaders(userId);
        try {
            const response = await axios_1.default.get(`${this.metaApiUrl}/me/adaccounts`, {
                headers,
                params: {
                    fields: 'id,name,account_status,currency,timezone_name,amount_spent,balance',
                },
            });
            return response.data.data;
        }
        catch (error) {
            console.error('Error fetching ad accounts:', error.response?.data || error.message);
            throw new common_1.BadRequestException('Failed to fetch Meta ad accounts');
        }
    }
    async createCampaign(userId, adAccountId, campaignData) {
        const headers = await this.getMetaHeaders(userId);
        try {
            const response = await axios_1.default.post(`${this.metaApiUrl}/act_${adAccountId}/campaigns`, {
                name: campaignData.name,
                objective: campaignData.objective,
                status: campaignData.status || 'PAUSED',
                special_ad_categories: campaignData.special_ad_categories || [],
                buying_type: campaignData.buying_type || 'AUCTION',
            }, { headers });
            return response.data;
        }
        catch (error) {
            console.error('Error creating campaign:', error.response?.data || error.message);
            throw new common_1.BadRequestException(`Failed to create campaign: ${error.response?.data?.error?.message || error.message}`);
        }
    }
    async createAdSet(userId, adAccountId, adSetData) {
        const headers = await this.getMetaHeaders(userId);
        try {
            const response = await axios_1.default.post(`${this.metaApiUrl}/act_${adAccountId}/adsets`, {
                name: adSetData.name,
                campaign_id: adSetData.campaign_id,
                targeting: adSetData.targeting,
                billing_event: adSetData.billing_event || 'IMPRESSIONS',
                optimization_goal: adSetData.optimization_goal || 'REACH',
                bid_amount: adSetData.bid_amount,
                daily_budget: adSetData.daily_budget,
                lifetime_budget: adSetData.lifetime_budget,
                status: adSetData.status || 'PAUSED',
            }, { headers });
            return response.data;
        }
        catch (error) {
            console.error('Error creating ad set:', error.response?.data || error.message);
            throw new common_1.BadRequestException(`Failed to create ad set: ${error.response?.data?.error?.message || error.message}`);
        }
    }
    async createAdCreative(userId, adAccountId, creativeData) {
        const headers = await this.getMetaHeaders(userId);
        try {
            const response = await axios_1.default.post(`${this.metaApiUrl}/act_${adAccountId}/adcreatives`, creativeData, { headers });
            return response.data;
        }
        catch (error) {
            console.error('Error creating ad creative:', error.response?.data || error.message);
            throw new common_1.BadRequestException(`Failed to create ad creative: ${error.response?.data?.error?.message || error.message}`);
        }
    }
    async createAd(userId, adAccountId, adData) {
        const headers = await this.getMetaHeaders(userId);
        try {
            const response = await axios_1.default.post(`${this.metaApiUrl}/act_${adAccountId}/ads`, {
                name: adData.name,
                adset_id: adData.adset_id,
                creative: adData.creative,
                status: adData.status || 'PAUSED',
            }, { headers });
            return response.data;
        }
        catch (error) {
            console.error('Error creating ad:', error.response?.data || error.message);
            throw new common_1.BadRequestException(`Failed to create ad: ${error.response?.data?.error?.message || error.message}`);
        }
    }
    async getCampaignInsights(userId, campaignId, dateRange) {
        const headers = await this.getMetaHeaders(userId);
        try {
            const params = {
                fields: 'impressions,clicks,spend,ctr,cpm,cpp,reach,frequency,actions,cost_per_action_type',
            };
            if (dateRange) {
                params.time_range = JSON.stringify(dateRange);
            }
            const response = await axios_1.default.get(`${this.metaApiUrl}/${campaignId}/insights`, { headers, params });
            return response.data.data[0] || null;
        }
        catch (error) {
            console.error('Error fetching campaign insights:', error.response?.data || error.message);
            throw new common_1.BadRequestException('Failed to fetch campaign insights');
        }
    }
    async updateCampaignStatus(userId, campaignId, status) {
        const headers = await this.getMetaHeaders(userId);
        try {
            const response = await axios_1.default.post(`${this.metaApiUrl}/${campaignId}`, { status }, { headers });
            return response.data;
        }
        catch (error) {
            console.error('Error updating campaign status:', error.response?.data || error.message);
            throw new common_1.BadRequestException('Failed to update campaign status');
        }
    }
    async validateAccessToken(accessToken) {
        try {
            const response = await axios_1.default.get(`${this.metaApiUrl}/me`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                params: {
                    fields: 'id,name',
                },
            });
            return { valid: true, data: response.data };
        }
        catch (error) {
            return { valid: false, error: error.response?.data || error.message };
        }
    }
    generateAuthUrl(redirectUri, state) {
        const appId = this.configService.get('META_APP_ID');
        if (!appId) {
            throw new common_1.BadRequestException('Meta app ID not configured');
        }
        const baseUrl = 'https://www.facebook.com/v19.0/dialog/oauth';
        const params = new URLSearchParams({
            client_id: appId,
            redirect_uri: redirectUri,
            scope: 'ads_management,ads_read,business_management',
            response_type: 'code',
            state: state || 'random_state_string',
        });
        return `${baseUrl}?${params.toString()}`;
    }
};
exports.MetaService = MetaService;
exports.MetaService = MetaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        users_service_1.UsersService])
], MetaService);
//# sourceMappingURL=meta.service.js.map