
import { IsEnum, IsString, IsDefined, IsOptional } from "class-validator";

export class UpdateMessageDto {

    @IsString()
    @IsDefined()
    message_contents: string;

}