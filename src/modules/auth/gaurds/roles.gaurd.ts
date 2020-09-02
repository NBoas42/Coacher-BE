import { Injectable, CanActivate, ExecutionContext, Inject, forwardRef } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/modules/user/providers/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        @Inject(forwardRef(() => UserService))
        private userService: UserService
    ) { }

   async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const userId = request.user._id;
        const userRoles = (await this.userService.findById(userId)).role;
        console.log(roles);
        console.log(userRoles);
        if(userRoles.some(r=> roles.indexOf(r) >= 0)){
            return true;
        }
        return false;
    }
}