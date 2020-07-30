import { IsString, IsDefined, IsOptional, IsBoolean, IsDateString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateScheduleItemDto {

   @ApiProperty()
   @IsString()
   @IsDefined()
   name: string;

   @ApiProperty()
   @IsString()
   @IsOptional()
   description:string;

   @ApiProperty()
   @IsDateString()
   @IsDefined()
   startDate: Date;

   @ApiProperty()
   @IsDateString()
   @IsDefined()
   endDate:Date;

   @ApiProperty()
   @IsBoolean()
   @IsOptional()
   available:boolean;
   
   @ApiProperty()
   @IsBoolean()
   @IsOptional()
   repeates:boolean;
  }