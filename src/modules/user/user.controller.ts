import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './providers/user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get("/all")
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get("/:id")
  getUserById(
    @Param("id") id
  ) {
    return this.userService.findById(id);
  }

  @Patch("/:id")
  patachUserById(
    @Param("id") id
  ){
    return this.userService
  }

  @Delete("/:id")
  deleteUserById(
    @Param("id") id
  ) {
    return this.userService.findById(id);
  }

}