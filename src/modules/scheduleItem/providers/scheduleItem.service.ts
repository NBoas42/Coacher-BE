import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { ScheduleItem } from '../model/scheduleItem.interface';
import { CreateScheduleItemDto } from '../dto/createScheduleItem.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateScheduleItemDto } from '../dto/updateScheduleItem.dto';

@Injectable()
export class ScheduleItemService {
  constructor(
    @InjectModel('ScheduleItem')
    private scheduleModel: Model<ScheduleItem>,
  ) {}

  async create(dto: CreateScheduleItemDto): Promise<ScheduleItem> {
    const createdSchedule = new this.scheduleModel(dto);
    return createdSchedule.save();
  }

  async findAll(): Promise<ScheduleItem[]> {
    return this.scheduleModel.find();
  }

  async findById(id): Promise<ScheduleItem> {
    return this.scheduleModel.findById(id);
  }

  async patchById(id, dto:UpdateScheduleItemDto):Promise<ScheduleItem>{
    return this.scheduleModel.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)},dto,{
      upsert:false,
  }).exec();
  }

  async deleteById(id):Promise<ScheduleItem>{
    return this.scheduleModel.findOneAndDelete({
      _id:id
    });
  }

  validateScheduleItem(scheduleItem:ScheduleItem){
    if(!(scheduleItem.startDate ||
      scheduleItem.endDate ||
      scheduleItem.name)) throw new HttpException('BAD_REQUEST: Address Not Valid', HttpStatus.BAD_REQUEST);
    return true
  }
}