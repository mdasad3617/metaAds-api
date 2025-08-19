export declare enum CampaignObjective {
    AWARENESS = "AWARENESS",
    TRAFFIC = "TRAFFIC",
    ENGAGEMENT = "ENGAGEMENT",
    LEADS = "LEADS",
    APP_PROMOTION = "APP_PROMOTION",
    SALES = "SALES",
    CONVERSIONS = "CONVERSIONS"
}
export declare enum CampaignStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    COMPLETED = "COMPLETED",
    ARCHIVED = "ARCHIVED"
}
export declare class CreateCampaignDto {
    name: string;
    objective: CampaignObjective;
    description?: string;
    budget?: number;
    startDate?: string;
    endDate?: string;
    status?: CampaignStatus;
    targetAudience?: string;
}
