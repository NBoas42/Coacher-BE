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
  async findAll(): Promise<Conversation[]> {
    return this.conversationModel.find();
  }

  //update (patchid)
  async patchById(id, dto):Promise<Conversation>{
    let conversationToUpdate =  await this.conversationModel.findById(id).exec();
    Object.keys(dto).forEach(key =>{
      conversationToUpdate[key] = dto[key];
    });
   return conversationToUpdate.save();
  }

  //delete
  async deleteById(id):Promise<Conversation>{
    return this.conversationModel.findOneAndDelete({
      _id:id
    });
  }

}