export declare class UserResponseDto {
    id: string;
    email: string;
    name?: string;
    createdAt: Date;
    metaUserId?: string;
    metaAdAccountId?: string;
}
export declare class MetaIntegrationResponseDto {
    success: boolean;
    message: string;
    user: UserResponseDto;
}
