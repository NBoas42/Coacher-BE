import { USER_ROLES } from "../model/user.class";
import { IsString, IsEnum, IsOptional, IsEmail, ValidateNested } from "class-validator";
import { Address } from "src/modules/address/model/address.class";
import { ScheduleItem } from "src/modules/scheduleItem/model/scheduleItem.class";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateUserDto {
   @ApiPropertyOptional()
   @IsEnum(USER_ROLES)
   @IsOptional()
   type?: USER_ROLES;

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
   address?:Address|string;

   @ApiPropertyOptional()
   @ValidateNested()
   @IsOptional()
   scheduleItems?:ScheduleItem[];

   @ApiPropertyOptional()
   @IsOptional()
   class:string;
  } 