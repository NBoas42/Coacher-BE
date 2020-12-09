import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { ConversationService } from './providers/conversation.service';
import { CreateConversationDto } from './dto/createConversation.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateConversationDto } from './dto/updateConversation.dto';
import { AddMessageDto } from './dto/addMessage.dto';


@Controller ("conversation")
export class ConversationController {
    constructor (private readonly conversationService: ConversationService) {}

//insert//create
@Post()
create(@Body(new ValidationPipe()) createConversationDto: CreateConversationDto) {
  return this.conversationService.create(createConversationDto);
}

//delete
@Delete("/:id")
deleteConversationById(
  @Param("id") id
) {
  return this.conversationService.findById(id);
}


@Patch("/:id")
patachConversationById(
  @Param("id") id,
  @Body(new ValidationPipe()) dto: UpdateConversationDto,
){
  return this.conversationService.patchById(id,dto);
}

@Patch("/message/add_message")
addMessageById(
  @Body(new ValidationPipe()) dto: AddMessageDto,
){
  return this.conversationService.addMessage(dto);
}

@Patch("/message/remove_message")
removeMessageById(
  @Body(new ValidationPipe()) dto: UpdateConversationDto,
){
  return {};
}

//get
@Get("/:id")
getConversationById(
  @Param("id") id
) {
  return this.conversationService.findById(id);
}

@Get("/all")
  getAllConversations() {
    return this.conversationService.findAll();
  }


}

