export interface CreateAdRequest {
    adSetId: string;
    name: string;
    adCopyId?: string;
    adCreativeId?: string;
}

export interface CreateAdSetRequest {
    campaignId: string;
    name: string;
    targetingOptions?: any;
    budget?: number;
    bidStrategy?: string;
}

export interface CreateCampaignRequest {
    name: string;
    objective: string;
    budget?: number;
    startDate?: string;
    endDate?: string;
}

export interface AdCopyRequest {
    productName: string;
    productDescription: string;
    targetAudience: string;
    adObjective: string;
    tone?: string;
    variations?: number;
}

export interface AdImageRequest {
    productName: string;
    productDescription: string;
    style?: string;
    aspectRatio?: string;
}

export interface MetaAdAccount {
    id: string;
    name: string;
    account_status: number;
    currency: string;
    timezone_name: string;
    amount_spent: string;
    balance: string;
}

export interface MetaCampaignData {
    name: string;
    objective: string;
    status: string;
    special_ad_categories?: string[];
    buying_type?: string;
}

export interface MetaAdSetData {
    name: string;
    campaign_id: string;
    targeting: any;
    billing_event: string;
    optimization_goal: string;
    bid_amount?: number;
    daily_budget?: number;
    lifetime_budget?: number;
    status: string;
}

export interface MetaAdData {
    name: string;
    adset_id: string;
    creative: {
        name: string;
        object_story_spec: any;
    };
    status: string;
}

export interface CreateUserData {
    email: string;
    password: string;
    name?: string;
}
