import { AdSetStatus, BidStrategy, TargetingOptionsDto } from './create-adset.dto';
export declare class AdSetResponseDto {
    id: string;
    name: string;
    campaignId: string;
    description?: string;
    status: AdSetStatus;
    budget?: number;
    bidStrategy: BidStrategy;
    targetingOptions?: TargetingOptionsDto;
    dailyBudgetCap?: number;
    metaAdSetId?: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    adsCount?: number;
}
