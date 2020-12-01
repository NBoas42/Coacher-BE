import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDefined } from "class-validator";

export class LoginUserDto {

   @ApiProperty()
   @IsString()
   @IsDefined()
   email: string;

   @ApiProperty()
   @IsString()
   @IsDefined()
   password: string;
}