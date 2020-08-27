import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ScheduleItemSchema} from './model/scheduleItem.schema'
import {ScheduleController} from "./scheduleItem.controller";
import {ScheduleItemService} from "./providers/scheduleItem.service";
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ScheduleItem', schema: ScheduleItemSchema }]),
    forwardRef(()=>UserModule),
],
  controllers: [ScheduleController],
  providers: [ScheduleItemService],
  exports: [ScheduleItemService],
})
export class ScheduleItemModule{}