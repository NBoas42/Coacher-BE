import {IsString, IsDefined, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAddressDto {

   @ApiProperty()
   @IsString()
   @IsDefined()
   country: string;

   @ApiProperty()
   @IsString()
   @IsDefined()
   state: string;

   @ApiProperty()
   @IsString()
   @IsDefined()
   city:string;

   @ApiProperty()
   @IsString()
   @IsDefined()
   streetAddress: string;

   @ApiProperty()
   @IsString()
   @IsDefined()
   zipCode: string;

   @ApiProperty()
   @IsString()
   @IsOptional()
   appartmentNumber?:string;
  }