import { Repository } from 'typeorm';
import { UserEntity } from '../common/entities/user.entity';
import { CreateUserData } from 'src/common/interface/metaInterface';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(data: CreateUserData): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity>;
    updateRefreshToken(userId: string, refreshToken: string | null): Promise<void>;
    updateMetaIntegration(userId: string, data: {
        metaAccessToken?: string;
        metaRefreshToken?: string;
        metaTokenExpiresAt?: Date;
        metaUserId?: string;
        metaAdAccountId?: string;
    }): Promise<UserEntity>;
    validateUser(id: string): Promise<UserEntity>;
}
