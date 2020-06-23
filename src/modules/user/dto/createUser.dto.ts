import { USER_TYPE } from "../model/user.interface";
import { IsEnum, IsString, IsDefined } from "class-validator";

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
   phoneNumber:string;
   @IsString()
   website:string;
   @IsString()
   about:string;
  }