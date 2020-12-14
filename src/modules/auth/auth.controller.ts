import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './providers/auth.service';
import { LoginUserDto } from "./dto/loginUser.dto";

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post("/login")
  @ApiOkResponse({ description: "Returns proposed name for lots" })
  login(@Body(new ValidationPipe()) LoginUserDto: LoginUserDto) {
    return this.authService.login(LoginUserDto);
  }

}
