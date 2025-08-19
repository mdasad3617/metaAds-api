export declare enum AdStatus {
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    DELETED = "DELETED",
    ARCHIVED = "ARCHIVED"
}
export declare class ObjectStorySpecDto {
    page_id: string;
    link_data?: {
        link: string;
        message?: string;
        name?: string;
        description?: string;
        call_to_action?: {
            type: string;
            value: {
                link: string;
            };
        };
    };
    photo_data?: {
        image_hash: string;
        message?: string;
        call_to_action?: {
            type: string;
            value: {
                link: string;
            };
        };
    };
    video_data?: {
        video_id: string;
        message?: string;
        call_to_action?: {
            type: string;
            value: {
                link: string;
            };
        };
    };
}
export declare class AdCreativeDto {
    name: string;
    object_story_spec: ObjectStorySpecDto;
}
export declare class CreateAdCreativeDto {
    name: string;
    object_story_spec: ObjectStorySpecDto;
    degrees_of_freedom_spec?: object;
}
export declare class CreateAdDto {
    name: string;
    adset_id: string;
    creative: AdCreativeDto;
    status?: AdStatus;
}
export declare class AdResponseDto {
    id: string;
    name: string;
    adset_id: string;
    campaign_id: string;
    status: AdStatus;
    creative: object;
    created_time: string;
    updated_time: string;
}
export declare class AdCreativeResponseDto {
    id: string;
    name: string;
    object_story_spec: object;
    created_time: string;
    updated_time: string;
}
