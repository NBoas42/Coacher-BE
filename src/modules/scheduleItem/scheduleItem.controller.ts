import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards} from '@nestjs/common';
import { ScheduleItemService } from './providers/scheduleItem.service';
import { CreateScheduleItemDto } from './dto/createScheduleItem.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateScheduleItemDto } from './dto/updateScheduleItem.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/gaurds/jwt.gaurd';
import { RolesGuard } from '../auth/gaurds/roles.gaurd';

@Controller("schedule_item")
export class ScheduleController {
  constructor(private readonly scheduleItemService: ScheduleItemService) {}

  @Post()
  @ApiOkResponse({ description: "Returns ScheduleItem Created in the Database" })
  create(@Body(new ValidationPipe()) createScheduleDto: CreateScheduleItemDto) {
    return this.scheduleItemService.create(createScheduleDto);
  }

  @Get("/all")
  @UseGuards(JwtAuthGuard,RolesGuard)
  @ApiOkResponse({ description: "Returns All ScheduleItems" })
  getAllScheduleItems() {
    return this.scheduleItemService.findAll();
  }

  @Get("/:id")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: "Returns ScheduleItem With Given Id" })
  getScheduleItemById(
    @Param("id") id:string
  ) {
    return this.scheduleItemService.findById(id);
  }

  @Patch("/:id")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: "Updates ScheduleItem With Given Id Updated with Dto Object" })
  patachScheduleItemById(
    @Param("id") id:string,
    @Body(new ValidationPipe()) dto: UpdateScheduleItemDto,
  ){
    return this.scheduleItemService.patchById(id,dto);
  }

  @Delete("/:id")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: "Deletes ScheduleItem with Given Id" })
  deleteScheduleItemById(
    @Param("id") id:string
  ) {
    return this.scheduleItemService.findById(id);
  }

}