import { Document } from 'mongoose';
import { User } from 'src/modules/user/model/user.interface';
import { ScheduleItem } from 'src/modules/scheduleItem/model/scheduleItem.interface';
import { Address } from 'src/modules/address/model/address.interface';

export enum PRICE_TYPE {
MONTHLY="MONTHLY",
YEARLY="YEARLY",
ONE_TIME="ONE_TIME",
FREE="FREE",
}


export interface Class extends Document {
  readonly _id: string;
  readonly name: string;
  readonly description:string;
  readonly location:Address;
  readonly price: number;
  readonly priceType:PRICE_TYPE;
  readonly schedule:ScheduleItem[];
  readonly owner: User;
  readonly participants:User[];
}