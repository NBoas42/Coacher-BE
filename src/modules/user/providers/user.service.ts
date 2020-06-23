import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { User } from '../model/user.interface';
import { CreateUserDto } from '../dto/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findById(id): Promise<User> {
    return this.userModel.findById(id);
  }

  async patchById(id, dto):Promise<User>{
    let userToUpdate =  await this.userModel.findById(id).exec();
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