import { UsersService } from './users.service';
declare class UpdateMetaIntegrationDto {
    metaAccessToken?: string;
    metaUserId?: string;
    metaAdAccountId?: string;
}
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<import("../common/entities/user.entity").UserEntity>;
    updateMetaIntegration(req: any, updateDto: UpdateMetaIntegrationDto): Promise<import("../common/entities/user.entity").UserEntity>;
}
export {};
