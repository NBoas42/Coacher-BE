import { IsString, IsOptional, IsBoolean, IsDateString, IsDefined, IsNumber, IsEnum } from "class-validator";
import { ScheduleItem } from "src/modules/scheduleItem/model/scheduleItem.class";
import { PRICE_TYPE } from "../model/class.class";
import { User } from "src/modules/user/model/user.class";
import { CreateAddressDto } from "src/modules/address/dto/createAddress.dto";
import { Address } from "src/modules/address/model/address.class";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateClassDto {
   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   name?: string;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   description?: string;

   @ApiPropertyOptional()
   @IsOptional()
   scheduleItems?:ScheduleItem[];

   @ApiPropertyOptional()
   @IsOptional()
   location?:Address|string;

   @ApiPropertyOptional()
   @IsOptional()
   @IsNumber()
   price?:number;
   
   @ApiPropertyOptional()
   @IsEnum(PRICE_TYPE)
   @IsOptional()
   priceType?:PRICE_TYPE;

   @ApiPropertyOptional()
   @IsOptional()
   participants?:string[];
   
  } 