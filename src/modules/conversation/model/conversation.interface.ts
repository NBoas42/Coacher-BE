import { Document } from 'mongoose';
import { IsDefined } from 'class-validator';

export interface Conversation extends Document {
  readonly title: string;
  readonly subject: string;
}