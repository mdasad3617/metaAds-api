import { MetaService } from './meta.service';
import { UsersService } from '../users/users.service';
declare class ConnectMetaDto {
    code: string;
    redirectUri: string;
}
declare class UpdateAdAccountDto {
    adAccountId: string;
}
export declare class MetaController {
    private readonly metaService;
    private readonly usersService;
    constructor(metaService: MetaService, usersService: UsersService);
    getAuthUrl(redirectUri: string, state?: string): {
        authUrl: string;
    };
    connectMeta(req: any, connectDto: ConnectMetaDto): Promise<{
        success: boolean;
        user: import("../common/entities/user.entity").UserEntity;
        metaUser: any;
    }>;
    getAdAccounts(req: any): Promise<import("../common/interface/metaInterface").MetaAdAccount[]>;
    setAdAccount(req: any, updateDto: UpdateAdAccountDto): Promise<{
        success: boolean;
        user: import("../common/entities/user.entity").UserEntity;
    }>;
    getConnectionStatus(req: any): Promise<{
        connected: boolean;
        message: string;
        user?: undefined;
        adAccountId?: undefined;
        error?: undefined;
    } | {
        connected: boolean;
        user: any;
        adAccountId: string;
        error: any;
        message?: undefined;
    }>;
    getCampaignInsights(req: any, campaignId: string, since?: string, until?: string): Promise<any>;
    updateCampaignStatus(req: any, campaignId: string, status: 'ACTIVE' | 'PAUSED'): Promise<any>;
    disconnectMeta(req: any): Promise<{
        success: boolean;
        message: string;
        user: import("../common/entities/user.entity").UserEntity;
    }>;
}
export {};
