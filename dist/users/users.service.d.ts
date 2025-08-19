import { Repository } from 'typeorm';
import { UserEntity } from '../common/entities/user.entity';
import { CreateUserData } from 'src/common/interface/metaInterface';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(data: CreateUserData): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity>;
    updateMetaIntegration(userId: string, data: {
        metaAccessToken?: string;
        metaUserId?: string;
        metaAdAccountId?: string;
    }): Promise<UserEntity>;
    validateUser(id: string): Promise<UserEntity>;
}
