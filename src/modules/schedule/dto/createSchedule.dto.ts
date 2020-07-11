import { IsString, IsDefined, IsOptional, IsDate, IsBoolean } from "class-validator";

export class CreateScheduleDto {

   @IsString()
   @IsDefined()
   name: string;

   @IsString()
   @IsOptional()
   description:string;

   @IsDate()
   @IsDefined()
   startDate: Date;

   @IsDate()
   @IsDefined()
   endDate:Date;

   @IsBoolean()
   @IsOptional()
   available:boolean;
   
   @IsBoolean()
   @IsOptional()
   repeates:boolean;
  }