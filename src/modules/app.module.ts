import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';
import { ScheduleItemModule } from './scheduleItem/scheduleItem.module';
import { ClassModule } from './class/class.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-2c3qk.mongodb.net/`, { dbName: process.env.DB_NAME }),
    UserModule,
    AddressModule,
    ConversationModule,
    MessageModule,
    ScheduleItemModule,
    ClassModule,
    AuthModule]
})
export class AppModule { }
