import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { Injectable, HttpException, HttpStatus, Inject, forwardRef } from '@nestjs/common';
import { Class } from '../model/class.class';
import { CreateClassDto } from '../dto/createClass.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateClassDto } from '../dto/updateClass.dto';
import { ScheduleItemService } from 'src/modules/scheduleItem/providers/scheduleItem.service';
import { AddressService } from 'src/modules/address/providers/address.service';
import { UserService } from 'src/modules/user/providers/user.service';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel('Class')
    private classModel: Model<Class>,
    private scheduleItemService: ScheduleItemService,
    private addressService: AddressService,
    @Inject(forwardRef(() => UserService))
    private userService: UserService
  ) { }

  async create(dto: CreateClassDto): Promise<Class> {

    if (dto.location) {
      const createdAddress = await this.addressService.create(dto.location);
      dto.location = createdAddress._id;
    }
      const createdClass = new this.classModel(dto);
    return createdClass.save();
  }

  async findAll(): Promise<Class[]> {
    return this.classModel.find();
  }

  async findById(id): Promise<Class> {
    return this.classModel.findById(id);
  }

  async patchById(id, dto: UpdateClassDto): Promise<Class> {

    if (dto.location) {
      //To Do Delete Previous Address if one previously Exists
      const createdAddress = await this.addressService.create(dto.location);
      dto.location = createdAddress._id;
    }

    if (dto.scheduleItems) {
      const classObj = await this.classModel.findById(id);
      const createdScheduleIds = [];
      for (const scheduleItem of dto.scheduleItems) {
        const createdScheduleItem = await this.scheduleItemService.create(scheduleItem);
        createdScheduleIds.push(createdScheduleItem._id);
      }
      if (classObj.scheduleItems.length > 0) {
        dto.scheduleItems = classObj.scheduleItems.concat(createdScheduleIds);
      } else {
        dto.scheduleItems = createdScheduleIds;
      }
    }
    
    if (dto.participants) {
      for (const participant of dto.participants) {
        this.userService.addClassReference(participant, id)
      }
    }

    return this.classModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, dto, {
      upsert: false,
    }).exec();
  }

  async deleteById(id): Promise<Class> {
    return this.classModel.findOneAndDelete({
      _id: id
    });
  }

  validateCreateClass(classObj: Class) {
    if (!(classObj.name ||
      classObj.owner ||
      classObj.description ||
      classObj.location)) throw new HttpException('BAD_REQUEST: Class Not Valid', HttpStatus.BAD_REQUEST);
    return true
  }

  validateUpdateClass(classObj: Class) {
    //Check list of obj keys, if they are contained in blank array of keys, fail validation
  }

  async addUserReference(classId,userId){
    await this.classModel.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(classId) },
      {$push:{
        participants:userId
      }},
      {
        upsert: false,
      });
  }
  
}