import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { ConversationService } from './providers/conversation.service';
import { CreateConversationDto } from './dto/createConversation.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateConversationDto } from './dto/updateConversation.dto';
import { AddMessageDto } from './dto/addMessage.dto';
import { RemoveMessageDto } from './dto/removeMessage.dto';
import { AddUserDto } from './dto/addUser.dto';
import { RemoveUserDto } from './dto/removeUser.dto';


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

@Patch("/message/add_message")
addMessageById(
  @Body(new ValidationPipe()) dto: AddMessageDto,
){
  return this.conversationService.addMessage(dto);
}

@Patch("/message/remove_message")
removeMessageById(
  @Body(new ValidationPipe()) dto: RemoveMessageDto,
){
  return this.conversationService.removeMessage(dto);
}


@Patch("/add_user")
addUserById(
  @Body(new ValidationPipe()) dto: AddUserDto,
){
  return this.conversationService.addUser(dto);
}

@Patch("/remove_user")
removeUserById(
  @Body(new ValidationPipe()) dto: RemoveUserDto,
){
  return this.conversationService.removeUser(dto);
}


@Patch("/:id")
patachConversationById(
  @Param("id") id,
  @Body(new ValidationPipe()) dto: UpdateConversationDto,
){
  return this.conversationService.patchById(id,dto);
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

