import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConversationService } from './providers/conversation.service';
import { CreateConversationDto } from './dto/createConversation.dto';