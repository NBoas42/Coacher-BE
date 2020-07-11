import { IsString, IsOptional,IsDate, IsBoolean } from "class-validator";

export class UpdateScheduleDto {
   @IsString()
   @IsOptional()
   name?: string;

   @IsString()
   @IsOptional()
   description?:string;

   @IsDate()
   @IsOptional()
   startDate?: Date;

   @IsString()
   @IsOptional()
   endDate?:Date;

   @IsBoolean()
   @IsOptional()
   available?:boolean;
   
   @IsBoolean()
   @IsOptional()
   repeates?:boolean;
   
  } 