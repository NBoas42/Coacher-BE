import { Controller, Get, Post, Body, Param, Patch, Delete, Query} from '@nestjs/common';
import { UserService } from './providers/user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateUserDto } from './dto/updateUser.dto';
import { ApiOkResponse} from '@nestjs/swagger';
import { User } from './model/user.class';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOkResponse({ description: "Returns proposed name for lots" })
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get("/with_query")
  @ApiOkResponse({ description: "Returns User Object Associated With Given Id" })
  getUserByName(
    @Query() searchQuery:UpdateUserDto,
  ) {
    const {firstName,lastName} = searchQuery;
    return this.userService.findLikeName(firstName,lastName);
  }

  @Get("/all")
  @ApiOkResponse({ description: "Returns All Users in DataBase. !Need To Add Admin Permission Gaurd!" })
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get("/:id")
  @ApiOkResponse({ description: "Returns User Object Associated With Given Id" })
  getUserById(
    @Param("id") id:string
  ) {
    return this.userService.findById(id);
  }

  @Get("/by_email/:email")
  @ApiOkResponse({ description: "Returns User Object Associated With Given Email" })
  getUserByEmail(
    @Param("email") email:string
  ) {

    return this.userService.findByEmail(email);
  }

  @Patch("/:id")
  @ApiOkResponse({ description: "Returns updated user object associated with given id and update dto" })
  patachUserById(
    @Param("id") id:string,
    @Body(new ValidationPipe()) dto: UpdateUserDto,
  ):Promise<User>{
    return this.userService.patchById(id,dto);
  }

  @Delete("/:id")
  @ApiOkResponse({ description: "Deletes the user with given id" })
  deleteUserById(
    @Param("id") id:string
  ) {
    return this.userService.findById(id);
  }

}