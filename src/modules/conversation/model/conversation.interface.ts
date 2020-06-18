import { Document } from 'mongoose';
import { IsDefined } from 'class-validator';

export interface Conversation extends Document {
  readonly name: string;
  readonly message: string;
  readonly time: number;
}