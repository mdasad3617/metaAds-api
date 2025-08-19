export declare enum ImageStyle {
    REALISTIC = "realistic",
    MINIMALIST = "minimalist",
    MODERN = "modern",
    VINTAGE = "vintage",
    ABSTRACT = "abstract",
    LIFESTYLE = "lifestyle",
    PRODUCT_FOCUS = "product_focus"
}
export declare enum AspectRatio {
    SQUARE = "1:1",
    LANDSCAPE = "16:9",
    PORTRAIT = "9:16",
    STORY = "9:16",
    FEED = "4:5"
}
export declare class GenerateAdImageDto {
    productName: string;
    productDescription: string;
    style?: ImageStyle;
    aspectRatio?: AspectRatio;
    background?: string;
    additionalElements?: string;
}
