import { USER_TYPE } from "../model/user.interface";
import { IsEnum, IsString, IsDefined, IsOptional, ValidateNested } from "class-validator";
import { Address } from "src/modules/address/model/address.interface";

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

   @ValidateNested()
   @IsOptional()
   address?: Address|string;
  }