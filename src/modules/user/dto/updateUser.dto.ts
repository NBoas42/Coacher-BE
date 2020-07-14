import { USER_TYPE } from "../model/user.interface";
import { IsString, IsEnum, IsOptional, IsEmail, ValidateNested } from "class-validator";
import { Address } from "src/modules/address/model/address.interface";
import { ScheduleItem } from "src/modules/scheduleItem/model/scheduleItem.interface";

export class UpdateUserDto {
   @IsEnum(USER_TYPE)
   @IsOptional()
   type?: USER_TYPE;

   @IsString()
   @IsOptional()
   firstName?: string;

   @IsString()
   @IsOptional()
   lastName?:string;

   @IsEmail()
   @IsOptional()
   email?: string;

   @IsString()
   @IsOptional()
   phoneNumber?:string;

   @IsString()
   @IsOptional()
   website?:string;
   
   @IsString()
   @IsOptional()
   about?:string;

   @ValidateNested()
   @IsOptional()
   address?:Address;

   @ValidateNested()
   @IsOptional()
   scheduleItems?:ScheduleItem[];
  } 