import { IsString, IsDefined, IsOptional, IsBoolean, IsDateString } from "class-validator";

export class CreateClassDto {

   @IsString()
   @IsDefined()
   name: string;

   @IsString()
   @IsOptional()
   description:string;

   @IsDateString()
   @IsDefined()
   startDate: Date;

   @IsDateString()
   @IsDefined()
   endDate:Date;

   @IsBoolean()
   @IsOptional()
   available:boolean;
   
   @IsBoolean()
   @IsOptional()
   repeates:boolean;
  }