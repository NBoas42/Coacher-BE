import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards} from '@nestjs/common';
import { ClassService } from './providers/class.service';
import { CreateClassDto } from './dto/createClass.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateClassDto } from './dto/updateClass.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { needsRoles } from '../auth/decorator/roles.decorator';
import { JwtAuthGuard } from '../auth/gaurds/jwt.gaurd';
import { RolesGuard } from '../auth/gaurds/roles.gaurd';
import { USER_ROLES } from '../user/model/user.class';

@Controller("class")
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: "Returns Created Class" })
  create(@Body(new ValidationPipe()) createScheduleDto: CreateClassDto) {
    return this.classService.create(createScheduleDto);
  }

  @Get("/all")
  @needsRoles(USER_ROLES.ADMIN)
  @UseGuards(JwtAuthGuard,RolesGuard)
  @ApiOkResponse({ description: "Returns All Class" })
  getAllClass() {
    return this.classService.findAll();
  }

  @Get("/:id")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: "Returns Class Item with Given id" })
  getClasById(
    @Param("id") id:string
  ) {
    return this.classService.findById(id);
  }

  @Patch("/:id")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: "Returns Patched Class" })
  patachClasById(
    @Param("id") id:string,
    @Body(new ValidationPipe()) dto: UpdateClassDto,
  ){
    return this.classService.patchById(id,dto);
  }

  @Delete("/:id")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: "Deletes Class with Given Id" })
  deleteClasById(
    @Param("id") id:string
  ) {
    return this.classService.findById(id);
  }

}