import { IsString, IsDefined, IsEnum, IsOptional, IsNumber } from "class-validator";
import { PRICE_TYPE } from "../model/class.class";
import { ScheduleItem } from "src/modules/scheduleItem/model/scheduleItem.class";
import { User } from "src/modules/user/model/user.class";
import { Address } from "src/modules/address/model/address.class";
import { ApiProperty } from "@nestjs/swagger";

export class CreateClassDto {

   @ApiProperty()
   @IsString()
   @IsDefined()
   name: string;

   @ApiProperty()
   @IsString()
   @IsDefined()
   description: string;

   @ApiProperty()
   @IsDefined()
   location:Address|string;

   @ApiProperty()
   @IsOptional()
   @IsNumber()
   price?:number;
   
   @ApiProperty()
   @IsEnum(PRICE_TYPE)
   @IsOptional()
   priceType?:PRICE_TYPE;

   @ApiProperty()
   @IsDefined()
   owner:User;

  }