import { IsEnum, IsString, IsDefined, IsOptional } from "class-validator";


export class AddMessageDto {

    @IsString()
    @IsDefined()
    conversation: string;

    @IsString()
    @IsDefined()
    sender: string;

    @IsString()
    @IsDefined()
    messageContents: string;
  }