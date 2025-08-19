import { CampaignEntity } from './campaign.entity';
import { AdCopyEntity } from './ad-copy.entity';
import { AdCreativeEntity } from './ad-creative.entity';
export declare class UserEntity {
    id: string;
    email: string;
    password: string;
    name?: string;
    createdAt: Date;
    updatedAt: Date;
    metaAccessToken?: string;
    metaRefreshToken?: string;
    metaTokenExpiresAt?: Date;
    metaUserId?: string;
    metaAdAccountId?: string;
    refreshToken?: string;
    campaigns: CampaignEntity[];
    adCopies: AdCopyEntity[];
    adCreatives: AdCreativeEntity[];
}
