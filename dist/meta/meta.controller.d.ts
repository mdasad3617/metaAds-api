import { MetaService } from './meta.service';
import { UsersService } from '../users/users.service';
import { ConnectMetaDto, MetaAuthUrlDto, UpdateAdAccountDto, MetaAuthUrlResponseDto, MetaConnectionResponseDto, MetaConnectionStatusDto } from './dto/meta-auth.dto';
import { CreateCampaignDto, UpdateCampaignStatusDto, CampaignInsightsQueryDto } from './dto/meta-campaign.dto';
import { CreateAdSetDto } from './dto/meta-adset.dto';
import { CreateAdDto, CreateAdCreativeDto } from './dto/meta-ad.dto';
export declare class MetaController {
    private readonly metaService;
    private readonly usersService;
    constructor(metaService: MetaService, usersService: UsersService);
    getAuthUrl(query: MetaAuthUrlDto): MetaAuthUrlResponseDto;
    connectMeta(req: any, connectDto: ConnectMetaDto): Promise<MetaConnectionResponseDto>;
    getAdAccounts(req: any): Promise<{
        data: import("../common/interface/metaInterface").MetaAdAccount[];
    }>;
    setAdAccount(req: any, updateDto: UpdateAdAccountDto): Promise<{
        success: boolean;
        user: import("../common/entities/user.entity").UserEntity;
    }>;
    getConnectionStatus(req: any): Promise<MetaConnectionStatusDto>;
    createCampaign(req: any, campaignDto: CreateCampaignDto): Promise<any>;
    createAdSet(req: any, adSetDto: CreateAdSetDto): Promise<any>;
    createAdCreative(req: any, creativeDto: CreateAdCreativeDto): Promise<any>;
    createAd(req: any, adDto: CreateAdDto): Promise<any>;
    getCampaignInsights(req: any, campaignId: string, query: CampaignInsightsQueryDto): Promise<any>;
    updateCampaignStatus(req: any, campaignId: string, statusDto: UpdateCampaignStatusDto): Promise<any>;
    refreshToken(req: any): Promise<any>;
    disconnectMeta(req: any): Promise<{
        success: boolean;
        message: string;
        user: import("../common/entities/user.entity").UserEntity;
    }>;
}
