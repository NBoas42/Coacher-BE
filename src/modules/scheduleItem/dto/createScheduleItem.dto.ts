import { IsString, IsDefined, IsOptional, IsBoolean, IsDateString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateScheduleItemDto {

   @ApiProperty()
   @IsString()
   @IsDefined()
   name: string;

   @ApiPropertyOptional()
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

   @ApiPropertyOptional()
   @IsBoolean()
   @IsOptional()
   available:boolean;
   
   @ApiPropertyOptional()
   @IsBoolean()
   @IsOptional()
   repeates:boolean;
  }