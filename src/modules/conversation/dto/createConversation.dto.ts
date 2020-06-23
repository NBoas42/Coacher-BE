import { IsEnum, IsString, IsDefined, IsOptional } from "class-validator";


export class CreateConversationDto {

  @IsString()
  @IsDefined()
  title: string;

  @IsString()
  @IsDefined()
  subject: string;
 
  }