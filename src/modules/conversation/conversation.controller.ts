import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConversationService } from './providers/conversation.service';
import { CreateConversationDto } from './dto/createConversation.dto';


@Controller ("conversation")
export class ConversationController {
    constructor (private readonly conversationService: ConversationService) {}

//insert


//delete

//create

//update

//get


}

