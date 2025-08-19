import { AdStatus, AdType } from './create-ad.dto';
export declare class AdResponseDto {
    id: string;
    name: string;
    adSetId: string;
    campaignId: string;
    description?: string;
    status: AdStatus;
    adType: AdType;
    adCopyId?: string;
    adCreativeId?: string;
    landingPageUrl?: string;
    callToAction?: string;
    metaAdId?: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    adCopy?: object;
    adCreative?: object;
}
