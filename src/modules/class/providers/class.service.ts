import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { Class } from '../model/class.interface';
import { CreateClassDto } from '../dto/createClass.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateClassDto } from '../dto/updateClass.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel('Class')
    private classModel: Model<Class>,
  ) {}

  async create(dto: CreateClassDto): Promise<Class> {
    const createdSchedule = new this.classModel(dto);
    return createdSchedule.save();
  }

  async findAll(): Promise<Class[]> {
    return this.classModel.find();
  }

  async findById(id): Promise<Class> {
    return this.classModel.findById(id);
  }

  async patchById(id, dto:UpdateClassDto):Promise<Class>{
    return this.classModel.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)},dto,{
      upsert:false,
  }).exec();
  }

  async deleteById(id):Promise<Class>{
    return this.classModel.findOneAndDelete({
      _id:id
    });
  }

  validateCreateClass(classObj:Class){
    if(!(classObj.name ||
      classObj.owner ||
      classObj.priceType)) throw new HttpException('BAD_REQUEST: Class Not Valid', HttpStatus.BAD_REQUEST);
    return true
  }

  validateUpdateClass(classObj:Class){
    //Check list of obj keys, if they are contained in blank array of keys, fail validation
  }
}