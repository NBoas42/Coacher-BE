import { IsString, IsOptional } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateAddressDto {

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   country?: string;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   state?: string;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   city?:string;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   streetAddress?: string;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   zipCode: string;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   appartmentNumber?:string;
  } 