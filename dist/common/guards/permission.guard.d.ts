import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/auth/entities/user.entity';
import { RoutePayloadInterface } from 'src/config/permission-config';
export declare class PermissionGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    checkIfDefaultRoute(permissionAgainst: RoutePayloadInterface): any;
    checkIfUserHavePermission(user: UserEntity, permissionAgainst: RoutePayloadInterface): any;
}
