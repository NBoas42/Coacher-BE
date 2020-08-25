import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './model/user.schema'
import { UserController } from "./user.controller";
import { UserService } from "./providers/user.service";
import { AddressModule } from '../address/address.module';
import { ScheduleItemModule } from '../scheduleItem/scheduleItem.module';
import { ClassModule } from '../class/class.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    AddressModule,
    ScheduleItemModule,
    forwardRef(() =>AuthModule),
    forwardRef(() => ClassModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }