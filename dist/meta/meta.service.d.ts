import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { MetaAdAccount } from 'src/common/interface/metaInterface';
import { CreateAdDto, CreateAdSetDto, CreateCampaignDto } from './dto';
export declare class MetaService {
    private configService;
    private usersService;
    private readonly metaApiUrl;
    constructor(configService: ConfigService, usersService: UsersService);
    private getMetaHeaders;
    exchangeCodeForToken(code: string, redirectUri: string): Promise<{
        access_token: any;
        expires_in: any;
        token_type: any;
    }>;
    exchangeForLongLivedToken(shortLivedToken: string): Promise<any>;
    refreshMetaToken(userId: string): Promise<any>;
    getUserInfo(accessToken: string): Promise<any>;
    getAdAccounts(userId: string): Promise<MetaAdAccount[]>;
    createCampaign(userId: string, adAccountId: string, campaignData: CreateCampaignDto): Promise<any>;
    createAdSet(userId: string, adAccountId: string, adSetData: CreateAdSetDto): Promise<any>;
    createAdCreative(userId: string, adAccountId: string, creativeData: any): Promise<any>;
    createAd(userId: string, adAccountId: string, adData: CreateAdDto): Promise<any>;
    getCampaignInsights(userId: string, campaignId: string, dateRange?: {
        since: string;
        until: string;
    }): Promise<any>;
    updateCampaignStatus(userId: string, campaignId: string, status: string): Promise<any>;
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
