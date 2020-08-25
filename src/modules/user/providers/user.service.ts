import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { Injectable, BadRequestException, Inject, forwardRef, NotFoundException } from '@nestjs/common';
import { User } from '../model/user.class';
import { CreateUserDto } from '../dto/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { AddressService } from 'src/modules/address/providers/address.service';
import { ScheduleItemService } from 'src/modules/scheduleItem/providers/scheduleItem.service';
import { ClassService } from 'src/modules/class/providers/class.service';
import { AuthService } from 'src/modules/auth/providers/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: Model<User>,
    private addressService: AddressService,
    private scheduleItemService: ScheduleItemService,
    @Inject(forwardRef(() => ClassService))
    private classService: ClassService,
    @Inject(forwardRef(() => AuthService))
    private authService :AuthService,
  ) { }

  async create(dto: CreateUserDto): Promise<User> {
    try {
      const userInsertObject = {
        ...dto,
        address: "",
      }

      if (dto.address) {
        const createdAddress = await this.addressService.create(dto.address);
        userInsertObject.address = createdAddress._id;
      }

      userInsertObject.password = await this.authService.hashPassword(dto.password);

      const createdUser = new this.userModel(userInsertObject);
      await createdUser.save();
      return this.userModel.findById(createdUser._id)
        .populate("address")
        .populate("scheduleItems");
    } catch (error) {
      console.log(error.message);
      throw new BadRequestException(error.message);
    }
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

  async findLikeName(firstName: string, lastName: string): Promise<User> {

    if (firstName && lastName) {
      return this.userModel.find({
        firstName: { "$regex": firstName, "$options": "i" },
        lastName: { "$regex": lastName, "$options": "i" }
      })
        .populate("address")
        .populate("scheduleItems");
    } else if (firstName && !lastName) {
      return this.userModel.find({ 
        firstName: { "$regex": firstName, "$options": "i" } 
      })
        .populate("address")
        .populate("scheduleItems");

    } else if (!firstName && lastName) {
      return this.userModel.find({ 
        lastName: { "$regex": lastName, "$options": "i" } 
      })
        .populate("address")
        .populate("scheduleItems");

    }
    return this.userModel.find()
      .populate("address")
      .populate("scheduleItems");
  }

  async findByEmail(email: string): Promise<User> {
    email = email.toLowerCase();
    const result = await this.userModel.findOne({
      email
    })
      .populate("address")
      .populate("scheduleItems");
    if (!result) throw new NotFoundException(`Account With Email Address ${email} was not found`);
    return result;
  }

   async findByEmailWithPassword(email: string): Promise<User> {
    email = email.toLowerCase();
    const result = await this.userModel.findOne({
      email
    })
    .select("+password");
    if (!result) throw new NotFoundException(`Account With Email Address ${email} was not found`);
    return result;
  }

  async patchById(id, dto: UpdateUserDto): Promise<User> {

    if (dto.address) {
      //To Do Delete Previous Address if one previously Exists
      const createdAddress = await this.addressService.create(dto.address);
      dto.address = createdAddress._id;
    }

    if (dto.scheduleItems) {
      const user = await this.userModel.findById(id);
      const createdScheduleIds = [];
      for (const scheduleItem of dto.scheduleItems) {
        const createdScheduleItem = await this.scheduleItemService.create(scheduleItem);
        createdScheduleIds.push(createdScheduleItem._id);
      }
      if (user.scheduleItems.length > 0) {
        dto.scheduleItems = user.scheduleItems.concat(createdScheduleIds);
      } else {
        dto.scheduleItems = createdScheduleIds;
      }
    }

    if (dto.class) {
      this.classService.addUserReference(dto.class, id);
    }

    return this.userModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, dto, {
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

  async addClassReference(userId, classId) {
    await this.userModel.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(userId) },
      {
        $push: {
          classes: classId
        }
      },
      {
        upsert: false,
      });
  }

}