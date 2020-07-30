import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { ClassService } from './providers/class.service';
import { CreateClassDto } from './dto/createClass.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateClassDto } from './dto/updateClass.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller("class")
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  @ApiOkResponse({ description: "Returns Created Class" })
  create(@Body(new ValidationPipe()) createScheduleDto: CreateClassDto) {
    return this.classService.create(createScheduleDto);
  }

  @Get("/all")
  @ApiOkResponse({ description: "Returns All Class" })
  getAllClass() {
    return this.classService.findAll();
  }

  @Get("/:id")
  @ApiOkResponse({ description: "Returns Class Item with Given id" })
  getClasById(
    @Param("id") id:string
  ) {
    return this.classService.findById(id);
  }

  @Patch("/:id")
  @ApiOkResponse({ description: "Returns Patched Class" })
  patachClasById(
    @Param("id") id:string,
    @Body(new ValidationPipe()) dto: UpdateClassDto,
  ){
    return this.classService.patchById(id,dto);
  }

  @Delete("/:id")
  @ApiOkResponse({ description: "Deletes Class with Given Id" })
  deleteClasById(
    @Param("id") id:string
  ) {
    return this.classService.findById(id);
  }

}