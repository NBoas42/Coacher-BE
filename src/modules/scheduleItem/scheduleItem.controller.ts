import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { ScheduleItemService } from './providers/scheduleItem.service';
import { CreateScheduleItemDto } from './dto/createScheduleItem.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateScheduleItemDto } from './dto/updateScheduleItem.dto';

@Controller("schedule_item")
export class ScheduleController {
  constructor(private readonly scheduleItemService: ScheduleItemService) {}

  @Post()
  create(@Body(new ValidationPipe()) createScheduleDto: CreateScheduleItemDto) {
    return this.scheduleItemService.create(createScheduleDto);
  }

  @Get("/all")
  getAllUsers() {
    return this.scheduleItemService.findAll();
  }

  @Get("/:id")
  getUserById(
    @Param("id") id
  ) {
    return this.scheduleItemService.findById(id);
  }

  @Patch("/:id")
  patachUserById(
    @Param("id") id,
    @Body(new ValidationPipe()) dto: UpdateScheduleItemDto,
  ){
    return this.scheduleItemService.patchById(id,dto);
  }

  @Delete("/:id")
  deleteUserById(
    @Param("id") id
  ) {
    return this.scheduleItemService.findById(id);
  }

}