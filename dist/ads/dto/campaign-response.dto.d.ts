import { CampaignStatus, CampaignObjective } from './create-campaign.dto';
export declare class CampaignResponseDto {
    id: string;
    name: string;
    objective: CampaignObjective;
    description?: string;
    status: CampaignStatus;
    budget?: number;
    startDate?: string;
    endDate?: string;
    targetAudience?: string;
    metaCampaignId?: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    adSetsCount?: number;
    adsCount?: number;
}
export declare class PublishCampaignResponseDto {
    success: boolean;
    metaCampaignId: string;
    message: string;
    campaign: CampaignResponseDto;
}
