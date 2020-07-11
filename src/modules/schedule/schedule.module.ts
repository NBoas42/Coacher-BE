import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ScheduleSchema} from './model/schedule.schema'
import {ScheduleController} from "./schedule.controller";
import {ScheduleService} from "./providers/schedule.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Schedule', schema: ScheduleSchema }])
],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule{}