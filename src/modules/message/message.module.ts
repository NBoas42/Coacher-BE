import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {MessageSchema} from './model/message.schema'
import {MessageController} from "./message.controller";
import {MessageService} from "./providers/message.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }])],
  controllers: [MessageController],
  providers: [MessageService],
  exports:[MessageService],
})
export class MessageModule{}
