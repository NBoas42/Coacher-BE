
import {  IsString, IsDefined } from "class-validator";

export class CreateMessageDto {

    @IsString()
    @IsDefined()
    messageContents: string;

    @IsString()
    @IsDefined()
    sender: string;
}