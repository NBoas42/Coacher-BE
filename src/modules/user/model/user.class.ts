import { Document } from 'mongoose';
import { Address } from 'cluster';
import { ScheduleItem } from 'src/modules/scheduleItem/model/scheduleItem.class';
import { Class } from 'src/modules/class/model/class.class';
import { ApiProperty } from '@nestjs/swagger';

export enum USER_TYPE {
  COACH="COACH",
  COACHEE="COACHEE",
  ADMIN="ADMIN",
}

export class User extends Document {
  @ApiProperty()
  readonly type: USER_TYPE;
  @ApiProperty()
  readonly firstName: string;
  @ApiProperty()
  readonly lastName:string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly password: string;
  @ApiProperty()
  readonly phoneNumber:string;
  @ApiProperty()
  readonly website:string;
  @ApiProperty()
  readonly about:string;
  @ApiProperty()
  readonly address:Address;
  @ApiProperty()
  readonly scheduleItems:ScheduleItem[];
  @ApiProperty()
  readonly classes:Class[];
}