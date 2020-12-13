import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';


export class Address extends Document {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  zipCode:string;
  @ApiProperty()
  state: string;
  @ApiProperty()
  city:string;
  @ApiProperty()
  streetAddress: string;
  @ApiProperty()
  appartmentNumber:string;
  
}