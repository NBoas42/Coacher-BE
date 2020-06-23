import { USER_TYPE } from "../model/user.interface";
import { IsString, IsEnum, IsOptional } from "class-validator";

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

   @IsString()
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
  } 