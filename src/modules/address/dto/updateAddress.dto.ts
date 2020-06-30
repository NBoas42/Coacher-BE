import { IsString, IsOptional } from "class-validator";

export class UpdateAddressDto {
   @IsString()
   @IsOptional()
   country?: string;

   @IsString()
   @IsOptional()
   state?: string;

   @IsString()
   @IsOptional()
   city?:string;

   @IsString()
   @IsOptional()
   streetAddress?: string;

   @IsString()
   @IsOptional()
   zipCode: string;

   @IsString()
   @IsOptional()
   appartmentNumber?:string;
  } 