import { Document } from 'mongoose';
import { IsDefined } from 'class-validator';


export interface Message extends Document {
  readonly message_contents: string;

}