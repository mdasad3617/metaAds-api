import { CreateCampaignRequest, CreateAdSetRequest, CreateAdRequest } from 'src/common/interface/metaInterface';
import { AdsService } from './ads.service';
export declare class AdsController {
    private readonly adsService;
    constructor(adsService: AdsService);
    createCampaign(req: any, body: CreateCampaignRequest): Promise<import("../common/entities/campaign.entity").CampaignEntity>;
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
    createAdSet(req: any, body: CreateAdSetRequest): Promise<import("../common/entities/ad-set.entity").AdSetEntity>;
    createAd(req: any, body: CreateAdRequest): Promise<import("../common/entities/ad.entity").AdEntity>;
    getCampaigns(req: any): Promise<import("../common/entities/campaign.entity").CampaignEntity[]>;
    getCampaignById(req: any, campaignId: string): Promise<import("../common/entities/campaign.entity").CampaignEntity>;
    getMetaAdAccounts(req: any): Promise<import("src/common/interface/metaInterface").MetaAdAccount[]>;
}
