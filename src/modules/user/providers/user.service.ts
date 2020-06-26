import { Model } from 'mongoose';
import { Injectable, Inject} from '@nestjs/common';
import { User } from '../model/user.interface';
import { CreateUserDto } from '../dto/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Address } from 'src/modules/address/model/address.interface';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { AddressService } from 'src/modules/address/providers/address.service';
import { CreateAddressDto } from 'src/modules/address/dto/createAddress.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: Model<User>,
    private AddressService: AddressService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    if(createUserDto.address){
      const createdAddress = await  this.AddressService.create(createUserDto.address);
      createUserDto.address = createdAddress._id;
    }
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().populate("address");
  }

  async findById(id): Promise<User> {
    return this.userModel.findById(id).populate("address");
  }

  async patchById(id, dto:UpdateUserDto):Promise<User>{
    const userToUpdate =  await this.userModel.findById(id).exec();
    Object.keys(dto).forEach(async key =>{
      if(key ==="address"){
        if(userToUpdate.address)await this.AddressService.deleteById(userToUpdate.address._id);
      const createdAddress = await  this.AddressService.create(dto.address);
      userToUpdate[key] = createdAddress._id;
      } else{
      userToUpdate[key] = dto[key];
      }
    });
   return userToUpdate.save();
  }

  async deleteById(id):Promise<User>{
    return this.userModel.findOneAndDelete({
      _id:id
    });
  }
}