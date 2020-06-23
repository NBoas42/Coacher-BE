import { IsEnum, IsString, IsDefined, IsOptional } from "class-validator";


export class UpdateConversationDto {

  @IsString()
  @IsDefined()
  title?: string;

  @IsString()
  @IsDefined()
  subject?: string;
 
  }