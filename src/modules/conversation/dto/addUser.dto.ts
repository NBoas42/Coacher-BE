import { IsEnum, IsString, IsDefined, IsOptional } from "class-validator";


export class AddUserDto {

    @IsString()
    @IsDefined()
    conversation: string;

    @IsString()
    @IsDefined()
    user: string;
  }