import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ScheduleItemSchema} from './model/scheduleItem.schema'
import {ScheduleController} from "./scheduleItem.controller";
import {ScheduleItemService} from "./providers/scheduleItem.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ScheduleItem', schema: ScheduleItemSchema }])
],
  controllers: [ScheduleController],
  providers: [ScheduleItemService],
  exports: [ScheduleItemService],
})
export class ScheduleItemModule{}