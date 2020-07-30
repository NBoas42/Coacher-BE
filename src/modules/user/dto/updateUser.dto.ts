import { USER_TYPE } from "../model/user.class";
import { IsString, IsEnum, IsOptional, IsEmail, ValidateNested } from "class-validator";
import { Address } from "src/modules/address/model/address.class";
import { ScheduleItem } from "src/modules/scheduleItem/model/scheduleItem.class";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateUserDto {
   @ApiPropertyOptional()
   @IsEnum(USER_TYPE)
   @IsOptional()
   type?: USER_TYPE;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   firstName?: string;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   lastName?:string;

   @ApiPropertyOptional()
   @IsEmail()
   @IsOptional()
   email?: string;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   phoneNumber?:string;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   website?:string;
   
   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   about?:string;

   @ApiPropertyOptional()
   @ValidateNested()
   @IsOptional()
   address?:string|Address;

   @ApiPropertyOptional()
   @ValidateNested()
   @IsOptional()
   scheduleItems?:ScheduleItem[];

   @ApiPropertyOptional()
   @IsOptional()
   class:string;
  } 