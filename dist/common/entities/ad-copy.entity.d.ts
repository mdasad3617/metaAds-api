import { UserEntity } from './user.entity';
import { CampaignEntity } from './campaign.entity';
import { AdEntity } from './ad.entity';
export declare class AdCopyEntity {
    id: string;
    headline: string;
    primaryText: string;
    description?: string;
    callToAction?: string;
    createdAt: Date;
    updatedAt: Date;
    prompt?: string;
    aiModel?: string;
    temperature?: number;
    userId: string;
    user: UserEntity;
    campaignId?: string;
    campaign?: CampaignEntity;
    ads: AdEntity[];
}
