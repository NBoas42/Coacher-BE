import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { AuthService } from './providers/auth.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { RolesGuard } from './gaurds/roles.gaurd';
import { JwtAuthGuard } from './gaurds/jwt.gaurd';
import { JwtStrategy } from './strategies/jwt.strategy';
@Module({
    imports: [
        forwardRef(() => UserModule),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async(configService: ConfigService) =>({
                secret: configService.get("JWT_SECRET"),
                signOptions: {expiresIn:"1800s"},
            })
        }),
    ],
    providers: [AuthService, RolesGuard, JwtAuthGuard, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule { }
