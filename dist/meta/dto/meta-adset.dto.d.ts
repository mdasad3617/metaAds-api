export declare enum AdSetStatus {
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    DELETED = "DELETED",
    ARCHIVED = "ARCHIVED"
}
export declare enum BillingEvent {
    IMPRESSIONS = "IMPRESSIONS",
    CLICKS = "CLICKS",
    ACTIONS = "ACTIONS",
    THRUPLAY = "THRUPLAY"
}
export declare enum OptimizationGoal {
    REACH = "REACH",
    IMPRESSIONS = "IMPRESSIONS",
    CLICKS = "CLICKS",
    ACTIONS = "ACTIONS",
    UNIQUE_CLICKS = "UNIQUE_CLICKS",
    LINK_CLICKS = "LINK_CLICKS",
    POST_ENGAGEMENT = "POST_ENGAGEMENT",
    PAGE_LIKES = "PAGE_LIKES",
    EVENT_RESPONSES = "EVENT_RESPONSES",
    CONVERSIONS = "CONVERSIONS",
    APP_INSTALLS = "APP_INSTALLS",
    APP_EVENTS = "APP_EVENTS",
    OFFSITE_CONVERSIONS = "OFFSITE_CONVERSIONS",
    THRUPLAY = "THRUPLAY",
    LANDING_PAGE_VIEWS = "LANDING_PAGE_VIEWS",
    QUALITY_CALL = "QUALITY_CALL",
    QUALITY_LEAD = "QUALITY_LEAD"
}
export declare class TargetingDto {
    geo_locations?: object;
    age_range?: {
        min: number;
        max: number;
    };
    genders?: number[];
    interests?: object[];
    behaviors?: object[];
    custom_audiences?: string[];
    excluded_custom_audiences?: string[];
}
export declare class CreateAdSetDto {
    name: string;
    campaign_id: string;
    targeting: TargetingDto;
    billing_event?: BillingEvent;
    optimization_goal?: OptimizationGoal;
    bid_amount?: number;
    daily_budget?: number;
    lifetime_budget?: number;
    status?: AdSetStatus;
}
export declare class AdSetResponseDto {
    id: string;
    name: string;
    campaign_id: string;
    status: AdSetStatus;
    billing_event: BillingEvent;
    optimization_goal: OptimizationGoal;
    daily_budget?: string;
    lifetime_budget?: string;
    targeting: object;
    created_time: string;
    updated_time: string;
}
