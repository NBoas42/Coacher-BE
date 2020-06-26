import {IsString, IsDefined, IsOptional } from "class-validator";

export class CreateAddressDto {
   @IsString()
   @IsDefined()
   country: string;

   @IsString()
   @IsDefined()
   state: string;

   @IsString()
   @IsDefined()
   city:string;

   @IsString()
   @IsDefined()
   streetAddress: string;

   @IsString()
   @IsDefined()
   zipCode: string;

   @IsString()
   @IsOptional()
   appartmentNumber?:string;
  }