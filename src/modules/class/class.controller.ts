import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { ClassService } from './providers/class.service';
import { CreateClassDto } from './dto/createClass.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateClassDto } from './dto/updateClass.dto';

@Controller("schedule_item")
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  create(@Body(new ValidationPipe()) createScheduleDto: CreateClassDto) {
    return this.classService.create(createScheduleDto);
  }

  @Get("/all")
  getAllUsers() {
    return this.classService.findAll();
  }

  @Get("/:id")
  getUserById(
    @Param("id") id
  ) {
    return this.classService.findById(id);
  }

  @Patch("/:id")
  patachUserById(
    @Param("id") id,
    @Body(new ValidationPipe()) dto: UpdateClassDto,
  ){
    return this.classService.patchById(id,dto);
  }

  @Delete("/:id")
  deleteUserById(
    @Param("id") id
  ) {
    return this.classService.findById(id);
  }

}