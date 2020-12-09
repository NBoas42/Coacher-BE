import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { Message } from '../model/message.interface';
import { CreateMessageDto } from '../dto/createMessage.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('Message')
    private messageModel: Model<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = new this.messageModel(createMessageDto);
    return createdMessage.save();
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find();
  }

  async findById(id): Promise<Message> {
    return this.messageModel.findById(id);
  }

  async patchById(id, dto):Promise<Message>{
    const messageToUpdate =  await this.messageModel.findById(id).exec();
    Object.keys(dto).forEach(key =>{
      messageToUpdate[key] = dto[key];
    });
   return messageToUpdate.save();
  }

  async deleteById(id):Promise<Message>{
    return this.messageModel.findOneAndDelete({
      _id:id
    });
  }
}