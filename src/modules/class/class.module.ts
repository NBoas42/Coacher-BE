import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassSchema } from './model/class.schema'
import { ClassController } from "./class.controller";
import { ClassService } from "./providers/class.service";
import { UserModule } from '../user/user.module';
import { AddressModule } from '../address/address.module';
import { ScheduleItemModule } from '../scheduleItem/scheduleItem.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Class', schema: ClassSchema }]),
    forwardRef(() => UserModule),
    AddressModule,
    ScheduleItemModule],
  controllers: [ClassController],
  providers: [ClassService],
  exports: [ClassService],
})
export class ClassModule { }