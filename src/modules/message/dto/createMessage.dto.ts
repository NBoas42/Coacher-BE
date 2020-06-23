
import { IsEnum, IsString, IsDefined, IsOptional } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsDefined()
    message_contents: string;

}