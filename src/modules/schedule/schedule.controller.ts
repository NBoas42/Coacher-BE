import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { ScheduleService } from './providers/schedule.service';
import { CreateScheduleDto } from './dto/createSchedule.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateScheduleDto } from './dto/updateSchedule.dto';

@Controller("schedule")
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  create(@Body(new ValidationPipe()) createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.create(createScheduleDto);
  }

  @Get("/all")
  getAllUsers() {
    return this.scheduleService.findAll();
  }

  @Get("/:id")
  getUserById(
    @Param("id") id
  ) {
    return this.scheduleService.findById(id);
  }

  @Patch("/:id")
  patachUserById(
    @Param("id") id,
    @Body(new ValidationPipe()) dto: UpdateScheduleDto,
  ){
    return this.scheduleService.patchById(id,dto);
  }

  @Delete("/:id")
  deleteUserById(
    @Param("id") id
  ) {
    return this.scheduleService.findById(id);
  }

}