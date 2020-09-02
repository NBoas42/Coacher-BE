import { USER_ROLES } from "../model/user.class";
import { IsEnum, IsString, IsDefined, IsOptional, ValidateNested } from "class-validator";
import { Address } from "src/modules/address/model/address.class";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
   @ApiProperty()
   @IsEnum(USER_ROLES)
   @IsDefined()
   role: USER_ROLES[];

   @ApiProperty()
   @IsString()
   @IsDefined()
   firstName: string;

   @ApiProperty()
   @IsString()
   @IsDefined()
   lastName:string;

   @ApiProperty()
   @IsString()
   @IsDefined()
   password:string;

   @ApiProperty()
   @IsString()
   @IsDefined()
   email: string;

   @ApiProperty()
   @IsString()
   @IsOptional()
   phoneNumber:string;

   @ApiProperty()
   @IsString()
   @IsOptional()
   website:string;
   
   @ApiProperty()
   @IsString()
   @IsOptional()
   about:string;

   @ApiProperty()
   @ValidateNested()
   @IsOptional()
   address?: Address;
   
  }