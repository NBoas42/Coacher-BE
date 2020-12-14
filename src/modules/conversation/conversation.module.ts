import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ConversationSchema} from './model/conversation.schema'
import {ConversationController} from "./conversation.controller";
import {ConversationService} from "./providers/conversation.service";
import { MessageModule } from '../message/message.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Conversation', schema: ConversationSchema }]),
    MessageModule
],
  controllers: [ConversationController],
  providers: [ConversationService],
})
export class ConversationModule{}
