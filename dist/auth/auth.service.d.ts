import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    validateUser(email: string, password: string): Promise<any>;
    generateTokens(user: any): Promise<{
        access_token: string;
        refresh_token: string;
        expires_in: number;
        token_type: string;
    }>;
    login(user: any): Promise<{
        user: {
            id: any;
            email: any;
            name: any;
        };
        access_token: string;
        refresh_token: string;
        expires_in: number;
        token_type: string;
    }>;
    refreshTokens(refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
        expires_in: number;
        token_type: string;
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
    register(email: string, password: string, name?: string): Promise<{
        user: {
            id: any;
            email: any;
            name: any;
        };
        access_token: string;
        refresh_token: string;
        expires_in: number;
        token_type: string;
    }>;
}
