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

  //create
  async create(createConversationDto: CreateConversationDto): Promise<Conversation> {
    const createdConv = new this.conversationModel(createConversationDto);
    return createdConv.save();
  }

  //get
  async findById(id): Promise<Conversation[]> {
    return this.conversationModel.findById(id);
  }

  //update (similar as create)
  async update(id,updateconversationdto): Promise<Conversation[]> {
   let conversationToBeUpdated = this.conversationModel.findById(id);
   conversationToBeUpdated.overwrite({
     ...conversationToBeUpdated
   });

  }

  //insert
  //async insert(id): Promise<Conversation[]> {
  // }

  //delete
  //async deleteConversation(id): Promise<Conversation[]> {
  //  delete this.conversationModel.deleteConversation(id);
  //  return this.conversationModel.deleteConversation(id);
  //  }


}