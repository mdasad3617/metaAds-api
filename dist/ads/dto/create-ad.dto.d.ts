export declare enum AdStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    ARCHIVED = "ARCHIVED"
}
export declare enum AdType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    CAROUSEL = "CAROUSEL",
    COLLECTION = "COLLECTION"
}
export declare class CreateAdDto {
    name: string;
    adSetId: string;
    description?: string;
    adCopyId?: string;
    adCreativeId?: string;
    adType?: AdType;
    status?: AdStatus;
    landingPageUrl?: string;
    callToAction?: string;
}
