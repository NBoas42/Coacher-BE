import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConversationService } from './providers/conversation.service';
import { CreateConversationDto } from './dto/createConversation.dto';


@Controller ("conversation")
export class ConversationController {
    constructor (private readonly conversationService: ConversationService) {}

//insert

//delete

//create
@Post()
  create(@Body() createConversationDto: CreateConversationDto) {
    return this.conversationService.create(createConversationDto);
  }

//update

//get
@Get("/:id")
getConversationById(
  @Param("id") id
) {
  return this.conversationService.findById(id);
}


}

