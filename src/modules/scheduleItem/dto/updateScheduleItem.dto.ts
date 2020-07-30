import { IsString, IsOptional, IsBoolean, IsDateString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateScheduleItemDto {
   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   name?: string;

   @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   description?:string;

   @ApiPropertyOptional()
   @IsDateString()
   @IsOptional()
   startDate?: Date;

   @ApiPropertyOptional()
   @IsDateString()
   @IsOptional()
   endDate?:Date;

   @ApiPropertyOptional()
   @IsBoolean()
   @IsOptional()
   available?:boolean;
   
   @ApiPropertyOptional()
   @IsBoolean()
   @IsOptional()
   repeates?:boolean;
   
  } 