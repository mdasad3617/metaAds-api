import { AdsService } from './ads.service';
import { CreateCampaignDto, CreateAdSetDto, CreateAdDto } from './dto';
export declare class AdsController {
    private readonly adsService;
    constructor(adsService: AdsService);
    createCampaign(req: any, body: CreateCampaignDto): Promise<import("../common/entities/campaign.entity").CampaignEntity>;
    publishCampaign(req: any, campaignId: string): Promise<{
        metaCampaignId: any;
        message: string;
        id: string;
        name: string;
        objective: import("../common/enum/metaEnum").CampaignObjective;
        status: import("../common/enum/metaEnum").CampaignStatus;
        budget?: number;
        startDate?: Date;
        endDate?: Date;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        user: import("../common/entities/user.entity").UserEntity;
        adSets: import("../common/entities/ad-set.entity").AdSetEntity[];
        adCopies: import("../common/entities/ad-copy.entity").AdCopyEntity[];
    }>;
    createAdSet(req: any, body: CreateAdSetDto): Promise<import("../common/entities/ad-set.entity").AdSetEntity>;
    createAd(req: any, body: CreateAdDto): Promise<import("../common/entities/ad.entity").AdEntity>;
    getCampaigns(req: any): Promise<import("../common/entities/campaign.entity").CampaignEntity[]>;
    getCampaignById(req: any, campaignId: string): Promise<import("../common/entities/campaign.entity").CampaignEntity>;
    getMetaAdAccounts(req: any): Promise<import("../common/interface/metaInterface").MetaAdAccount[]>;
}
