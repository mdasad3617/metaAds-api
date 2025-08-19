import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { MetaAdAccount, MetaCampaignData, MetaAdSetData, MetaAdData } from 'src/common/interface/metaInterface';
export declare class MetaService {
    private configService;
    private usersService;
    private readonly metaApiUrl;
    constructor(configService: ConfigService, usersService: UsersService);
    private getMetaHeaders;
    exchangeCodeForToken(code: string, redirectUri: string): Promise<any>;
    getUserInfo(accessToken: string): Promise<any>;
    getAdAccounts(userId: string): Promise<MetaAdAccount[]>;
    createCampaign(userId: string, adAccountId: string, campaignData: MetaCampaignData): Promise<any>;
    createAdSet(userId: string, adAccountId: string, adSetData: MetaAdSetData): Promise<any>;
    createAdCreative(userId: string, adAccountId: string, creativeData: any): Promise<any>;
    createAd(userId: string, adAccountId: string, adData: MetaAdData): Promise<any>;
    getCampaignInsights(userId: string, campaignId: string, dateRange?: {
        since: string;
        until: string;
    }): Promise<any>;
    updateCampaignStatus(userId: string, campaignId: string, status: 'ACTIVE' | 'PAUSED'): Promise<any>;
    validateAccessToken(accessToken: string): Promise<{
        valid: boolean;
        data: any;
        error?: undefined;
    } | {
        valid: boolean;
        error: any;
        data?: undefined;
    }>;
    generateAuthUrl(redirectUri: string, state?: string): string;
}
