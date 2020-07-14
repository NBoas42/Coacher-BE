import { Document } from 'mongoose';


export interface ScheduleItem extends Document {
  readonly _id: string;
  readonly name: string;
  readonly description: string;
  readonly startDate:Date;
  readonly endDate: Date;
  readonly available:boolean;
  readonly repeates:boolean;
}