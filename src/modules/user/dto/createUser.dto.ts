import { USER_TYPE } from "../model/user.interface";
import { IsEnum, IsString, IsDefined, IsOptional } from "class-validator";

export class CreateUserDto {
   @IsEnum(USER_TYPE)
   @IsDefined()
   type: USER_TYPE;

   @IsString()
   @IsDefined()
   firstName: string;

   @IsString()
   @IsDefined()
   lastName:string;

   @IsString()
   @IsDefined()
   email: string;

   @IsString()
   @IsOptional()
   phoneNumber:string;

   @IsString()
   @IsOptional()
   website:string;
   
   @IsString()
   @IsOptional()
   about:string;
  }