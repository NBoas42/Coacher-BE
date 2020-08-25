import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { AuthService } from './providers/auth.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async(configService: ConfigService) =>({
                secret: configService.get("JWT_SECRET"),
                signOptions: {expiresIn:"1800s"},
            })
        }),
        forwardRef(() => UserModule)
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule { }
