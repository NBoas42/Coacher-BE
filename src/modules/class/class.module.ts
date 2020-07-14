import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ClassSchema} from './model/class.schema'
import {ClassController} from "./class.controller";
import {ClassService} from "./providers/class.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ScheduleItem', schema: ClassSchema }])
],
  controllers: [ClassController],
  providers: [ClassService],
  exports: [ClassService],
})
export class ClassModule{}