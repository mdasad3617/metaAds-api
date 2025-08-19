import { UsersService } from './users.service';
import { UpdateMetaIntegrationDto, UserResponseDto } from './dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<UserResponseDto>;
    updateMetaIntegration(req: any, updateDto: UpdateMetaIntegrationDto): Promise<UserResponseDto>;
}
