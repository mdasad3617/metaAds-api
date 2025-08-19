export declare class UserResponseDto {
    id: string;
    email: string;
    name?: string;
}
export declare class AuthResponseDto {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string;
    user: UserResponseDto;
}
export declare class TokenResponseDto {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string;
}
