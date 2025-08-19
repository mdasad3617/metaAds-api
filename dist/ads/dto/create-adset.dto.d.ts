export declare enum AdSetStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    ARCHIVED = "ARCHIVED"
}
export declare enum BidStrategy {
    LOWEST_COST_WITHOUT_CAP = "LOWEST_COST_WITHOUT_CAP",
    LOWEST_COST_WITH_BID_CAP = "LOWEST_COST_WITH_BID_CAP",
    TARGET_COST = "TARGET_COST",
    COST_CAP = "COST_CAP"
}
export declare class TargetingOptionsDto {
    ageRange?: {
        min: number;
        max: number;
    };
    genders?: number[];
    locations?: object;
    interests?: string[];
    behaviors?: string[];
    devices?: string[];
}
export declare class CreateAdSetDto {
    name: string;
    campaignId: string;
    description?: string;
    targetingOptions?: TargetingOptionsDto;
    budget?: number;
    bidStrategy?: BidStrategy;
    status?: AdSetStatus;
    dailyBudgetCap?: number;
}
