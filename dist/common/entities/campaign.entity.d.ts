import { CampaignObjective, CampaignStatus } from '../enum/metaEnum';
import { AdCopyEntity } from './ad-copy.entity';
import { AdSetEntity } from './ad-set.entity';
import { UserEntity } from './user.entity';
export declare class CampaignEntity {
    id: string;
    name: string;
    objective: CampaignObjective;
    status: CampaignStatus;
    budget?: number;
    startDate?: Date;
    endDate?: Date;
    createdAt: Date;
    updatedAt: Date;
    metaCampaignId?: string;
    userId: string;
    user: UserEntity;
    adSets: AdSetEntity[];
    adCopies: AdCopyEntity[];
}
