import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ConversationSchema} from './model/conversation.schema'
import {ConversationController} from "./conversation.controller";
import {ConversationService} from "./providers/conversation.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Conversation', schema: ConversationSchema }])],
  controllers: [ConversationController],
  providers: [ConversationService],
})
export class ConversationModule{}