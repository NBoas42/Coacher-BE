import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { Injectable} from '@nestjs/common';
import { Schedule } from '../model/schedule.interface';
import { CreateScheduleDto } from '../dto/createSchedule.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateScheduleDto } from '../dto/updateSchedule.dto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel('Schedule')
    private scheduleModel: Model<Schedule>,
  ) {}

  async create(dto: CreateScheduleDto): Promise<Schedule> {
    const createdSchedule = new this.scheduleModel(dto);
    return createdSchedule.save();
  }

  async findAll(): Promise<Schedule[]> {
    return this.scheduleModel.find();
  }

  async findById(id): Promise<Schedule> {
    return this.scheduleModel.findById(id);
  }

  async patchById(id, dto:UpdateScheduleDto):Promise<Schedule>{
    return this.scheduleModel.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)},dto,{
      upsert:false,
  }).exec();
  }

  async deleteById(id):Promise<Schedule>{
    return this.scheduleModel.findOneAndDelete({
      _id:id
    });
  }
}