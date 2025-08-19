export declare class ConnectMetaDto {
    code: string;
    redirectUri: string;
}
export declare class MetaAuthUrlDto {
    redirect_uri: string;
    state?: string;
}
export declare class UpdateAdAccountDto {
    adAccountId: string;
}
export declare class MetaAuthUrlResponseDto {
    authUrl: string;
}
export declare class MetaConnectionResponseDto {
    success: boolean;
    user: object;
    metaUser: object;
}
export declare class MetaConnectionStatusDto {
    connected: boolean;
    message?: string;
    user?: object;
    adAccountId?: string;
    error?: object;
}
