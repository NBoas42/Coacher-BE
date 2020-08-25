import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { ScheduleItemModule } from './scheduleItem/scheduleItem.module';
import { ClassModule } from './class/class.module';


@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-2c3qk.mongodb.net/`, { dbName: process.env.DB_NAME }),
    UserModule,
    AddressModule,
    ScheduleItemModule,
    ClassModule,]
})
export class AppModule { }
