import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { Conversation } from '../model/conversation.interface';
import { CreateConversationDto } from '../dto/createConversation.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from "mongoose"

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel('Conversation')
    private conversationModel: Model<Conversation>,
  ) {}

  async create(createConversationDto: CreateConversationDto): Promise<Conversation> {
    const createdConv = new this.conversationModel(createConversationDto);
    return createdConv.save();
  }

  async findById(id): Promise<Conversation[]> {
    return this.conversationModel.findById(id);
  }


}