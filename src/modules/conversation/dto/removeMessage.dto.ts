import { IsString, IsDefined } from "class-validator";


export class RemoveMessageDto {

    @IsString()
    @IsDefined()
    conversation: string;

    @IsString()
    @IsDefined()
    messageId: string;
  }