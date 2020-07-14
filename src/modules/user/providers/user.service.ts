import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User } from '../model/user.interface';
import { CreateUserDto } from '../dto/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { AddressService } from 'src/modules/address/providers/address.service';
import { ScheduleItemService } from 'src/modules/scheduleItem/providers/scheduleItem.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: Model<User>,
    private addressService: AddressService,
    private scheduleItemService: ScheduleItemService,
  ) { }

  async create(dto: CreateUserDto): Promise<User> {
    const userInsertObject = {
      ...dto,
      address: "",
    }
    if (this.addressService.validateAddress(dto.address)) {
      const createdAddress = await this.addressService.create(dto.address);
      userInsertObject.address = createdAddress._id;
    }
    const createdUser = new this.userModel(userInsertObject);
    await createdUser.save();
    return this.userModel.findById(createdUser._id)
    .populate("address")
    .populate("scheduleItems");
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find()
      .populate("address")
      .populate("scheduleItems");
  }

  async findById(id): Promise<User> {
    return this.userModel.findById(id)
      .populate("address")
      .populate("scheduleItems");
  }

  async patchById(id, dto: UpdateUserDto): Promise<User> {
    const userInsertObject = {
      ...dto,
      address: "",
    }
    if (this.addressService.validateAddress(dto.address)) {
      const createdAddress = await this.addressService.create(dto.address);
      userInsertObject.address = createdAddress._id;
    }
    if (dto.scheduleItems) {
      const user = await this.userModel.findById(id).execute();
      const createdScheduleIds = [];
      dto.scheduleItems.forEach(async (scheduleItem) => {
        const createdScheduleItem = await this.scheduleItemService.create(scheduleItem);
        createdScheduleIds.push(createdScheduleItem._id);
      });
      dto.scheduleItems = user.scheduleItems.concat(createdScheduleIds);
    }
    return this.userModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, userInsertObject, {
      upsert: false,
    })
      .populate("address")
      .populate("scheduleItems");
  }

  async deleteById(id): Promise<User> {
    return this.userModel.findOneAndDelete({
      _id: id
    });
  }
}