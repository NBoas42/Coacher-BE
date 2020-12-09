import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { Conversation } from '../model/conversation.interface';
import { CreateConversationDto } from '../dto/createConversation.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from "mongoose"
import { AddMessageDto } from '../dto/addMessage.dto';
import { MessageService } from 'src/modules/message/providers/message.service';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel('Conversation')
    private conversationModel: Model<Conversation>,
    private messageService: MessageService
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
    const conversationToUpdate =  await this.conversationModel.findById(id).exec();
    Object.keys(dto).forEach(key =>{
      conversationToUpdate[key] = dto[key];
    });
   return conversationToUpdate.save();
  }

  async addMessage(dto:AddMessageDto):Promise<Conversation>{
    const conversationToUpdate =  await this.conversationModel.findById(dto.conversation).exec();
    const createdMessage = await this.messageService.create({
      message_contents: dto.message_contents,
      sender: dto.sender
    });
    conversationToUpdate.messages.push(createdMessage._id);
   return conversationToUpdate.save(conversationToUpdate);
  }

  //delete
  async deleteById(id):Promise<Conversation>{
    return this.conversationModel.findOneAndDelete({
      _id:id
    });
  }

}
