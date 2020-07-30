import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';


export class ScheduleItem extends Document {
  @ApiProperty()
  readonly _id: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly startDate:Date;

  @ApiProperty()
  readonly endDate: Date;

  @ApiProperty()
  readonly available:boolean;

  @ApiProperty()
  readonly repeates:boolean;
}