export declare class AdImageResponseDto {
    id: string;
    productName: string;
    imageUrl: string;
    prompt: string;
    dimensions: {
        width: number;
        height: number;
        aspectRatio: string;
    };
    parameters: object;
    createdAt: Date;
    userId: string;
    fileSize?: number;
    format?: string;
}
export declare class AdImageHistoryDto {
    data: AdImageResponseDto[];
    total: number;
    page: number;
    limit: number;
}
