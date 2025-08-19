export declare class AdCopyVariationDto {
    headline: string;
    description: string;
    callToAction: string;
    primaryText?: string;
}
export declare class AdCopyResponseDto {
    id: string;
    productName: string;
    copies: AdCopyVariationDto[];
    parameters: object;
    createdAt: Date;
    userId: string;
}
export declare class AdCopyHistoryDto {
    data: AdCopyResponseDto[];
    total: number;
    page: number;
    limit: number;
}
