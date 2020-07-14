import { IsString, IsOptional, IsBoolean, IsDateString } from "class-validator";

export class UpdateScheduleItemDto {
   @IsString()
   @IsOptional()
   name?: string;

   @IsString()
   @IsOptional()
   description?:string;

   @IsDateString()
   @IsOptional()
   startDate?: Date;

   @IsDateString()
   @IsOptional()
   endDate?:Date;

   @IsBoolean()
   @IsOptional()
   available?:boolean;
   
   @IsBoolean()
   @IsOptional()
   repeates?:boolean;
   
  } 