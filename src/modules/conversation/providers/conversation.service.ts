import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { Conversation } from '../model/conversation.interface';
import { CreateConversationDto } from '../dto/createConversation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AddMessageDto } from '../dto/addMessage.dto';
import { MessageService } from 'src/modules/message/providers/message.service';
import { RemoveMessageDto } from '../dto/removeMessage.dto';
import { CreateMessageDto } from 'src/modules/message/dto/createMessage.dto';
import { AddUserDto } from '../dto/addUser.dto';
import { RemoveUserDto } from '../dto/removeUser.dto';
const  mqtt = require('mqtt');

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
    return this.conversationModel.findById(id)
    .populate("participants")
    .populate("messages");
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
      messageContents: dto.messageContents,
      sender: dto.sender
    });
    const client  = mqtt.connect('mqtt://broker.emqx.io');
    client.publish(`Coacher/Conversation/${dto.conversation}`,JSON.stringify(createdMessage));
    conversationToUpdate.messages.push(createdMessage._id);
    await conversationToUpdate.save();
    return await this.conversationModel.findById(dto.conversation).populate({path: 'messages'});
  }

  async removeMessage(dto:RemoveMessageDto):Promise<Conversation>{
    const conversationToUpdate =  await this.conversationModel.findById(dto.conversation).populate({path: 'messages'});
    for(let i=0;i<conversationToUpdate.messages.length;i++){
      if(conversationToUpdate.messages[i]._id === dto.messageId){
        conversationToUpdate.messages = conversationToUpdate.messages[i].splice(i,i);
      } 
    }
   return conversationToUpdate.save();
  }

  async addUser(dto:AddUserDto):Promise<Conversation>{
    const conversationToUpdate =  await this.conversationModel.findById(dto.conversation).exec();

    if(conversationToUpdate.participants.includes(dto.user)){
      throw new HttpException('BAD_REQUEST: User Already in conversation', HttpStatus.BAD_REQUEST);
    };

    conversationToUpdate.participants.push(dto.user);
    console.log(conversationToUpdate);
    await conversationToUpdate.save();
    return await this.conversationModel.findById(dto.conversation).populate({path: 'participants'});

  }

  async removeUser(dto:RemoveUserDto):Promise<Conversation>{
    const conversationToUpdate =  await this.conversationModel.findById(dto.conversation);
    for(let i=0;i<conversationToUpdate.participants.length;i++){
      if(conversationToUpdate.participants[i]._id === dto.user){
        conversationToUpdate.messages = conversationToUpdate.messages[i].splice(i,i);
      } 
    }
   return conversationToUpdate.save();
  }
  

  //delete
  async deleteById(id):Promise<Conversation>{
    return this.conversationModel.findOneAndDelete({
      _id:id
    });
  }

}
