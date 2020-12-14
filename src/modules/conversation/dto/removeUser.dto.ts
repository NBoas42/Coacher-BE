import { IsEnum, IsString, IsDefined, IsOptional } from "class-validator";


export class RemoveUserDto {

    @IsString()
    @IsDefined()
    conversation: string;

    @IsString()
    @IsDefined()
    user: string;
  }