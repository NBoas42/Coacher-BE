
import { IsEnum, IsString, IsDefined, IsOptional } from "class-validator";

export class CreateMessageDto {

    @IsString()
    @IsDefined()
    message_contents: string;

}