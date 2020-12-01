import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { MessageService } from './providers/message.service';
import { CreateMessageDto } from './dto/createMessage.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateMessageDto } from './dto/updateMessage.dto';

@Controller("message")
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body(new ValidationPipe()) createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @Get("/all")
  getAllMessages() {
    return this.messageService.findAll();
  }

  @Get("/:id")
  getMessageById(
    @Param("id") id
  ) {
    return this.messageService.findById(id);
  }

  @Patch("/:id")
  patchMessageById(
    @Param("id") id,
    @Body(new ValidationPipe()) dto: UpdateMessageDto,
  ){
    return this.messageService.patchById(id,dto);
  }

  @Delete("/:id")
  deleteMessageById(
    @Param("id") id
  ) {
    return this.messageService.findById(id);
  }

}
