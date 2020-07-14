import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema} from './model/user.schema'
import {UserController} from "./user.controller";
import {UserService} from "./providers/user.service";
import { AddressModule } from '../address/address.module';
import { ScheduleItemModule } from '../scheduleItem/scheduleItem.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
            AddressModule,
            ScheduleItemModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule{}