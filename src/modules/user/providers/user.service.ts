import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { User } from '../model/user.interface';
import { CreateUserDto } from '../dto/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from "mongoose"

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id): Promise<User> {
    return this.userModel.findById(id);
  }

  async patchById(id, dto):Promise<User>{
    let userToUpdate = this.userModel.findById(id);
    Object.keys(dto).forEach(key =>{
      userToUpdate[key] = dto[key];
    });
   return userToUpdate.save();
  }

  async deleteById(id):Promise<User>{
    return this.userModel.findOneAndDelete({
      _id:id
    });
  }
}