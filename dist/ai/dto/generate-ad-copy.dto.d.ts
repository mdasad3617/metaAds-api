export declare enum AdTone {
    PROFESSIONAL = "professional",
    CASUAL = "casual",
    FRIENDLY = "friendly",
    URGENT = "urgent",
    LUXURY = "luxury",
    PLAYFUL = "playful"
}
export declare enum AdObjective {
    AWARENESS = "awareness",
    TRAFFIC = "traffic",
    ENGAGEMENT = "engagement",
    LEADS = "leads",
    SALES = "sales",
    APP_PROMOTION = "app_promotion"
}
export declare class GenerateAdCopyDto {
    productName: string;
    productDescription: string;
    targetAudience: string;
    adObjective: AdObjective;
    tone?: AdTone;
    variations?: number;
    additionalContext?: string;
}
