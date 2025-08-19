export declare enum CampaignObjective {
    OUTCOME_AWARENESS = "OUTCOME_AWARENESS",
    OUTCOME_TRAFFIC = "OUTCOME_TRAFFIC",
    OUTCOME_ENGAGEMENT = "OUTCOME_ENGAGEMENT",
    OUTCOME_LEADS = "OUTCOME_LEADS",
    OUTCOME_APP_PROMOTION = "OUTCOME_APP_PROMOTION",
    OUTCOME_SALES = "OUTCOME_SALES"
}
export declare enum CampaignStatus {
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    DELETED = "DELETED",
    ARCHIVED = "ARCHIVED"
}
export declare enum BuyingType {
    AUCTION = "AUCTION",
    RESERVED = "RESERVED"
}
export declare class CreateCampaignDto {
    name: string;
    objective: CampaignObjective;
    status?: CampaignStatus;
    special_ad_categories?: string[];
    buying_type?: BuyingType;
}
export declare class UpdateCampaignStatusDto {
    status: CampaignStatus;
}
export declare class CampaignInsightsQueryDto {
    since?: string;
    until?: string;
}
export declare class CampaignResponseDto {
    id: string;
    name: string;
    objective: CampaignObjective;
    status: CampaignStatus;
    created_time: string;
    updated_time: string;
}
export declare class CampaignInsightsDto {
    impressions?: string;
    clicks?: string;
    spend?: string;
    ctr?: string;
    cpm?: string;
    cpp?: string;
    reach?: string;
    frequency?: string;
    actions?: object[];
    cost_per_action_type?: object[];
}
