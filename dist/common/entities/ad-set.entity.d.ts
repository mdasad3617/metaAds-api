import { AdSetStatus } from '../enum/metaEnum';
import { CampaignEntity } from './campaign.entity';
import { AdEntity } from './ad.entity';
export declare class AdSetEntity {
    id: string;
    name: string;
    targetingOptions?: any;
    budget?: number;
    bidStrategy?: string;
    status: AdSetStatus;
    createdAt: Date;
    updatedAt: Date;
    metaAdSetId?: string;
    campaignId: string;
    campaign: CampaignEntity;
    ads: AdEntity[];
}
