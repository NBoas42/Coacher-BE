import { Document } from 'mongoose';
import { IsDefined } from 'class-validator';

export interface Conversation extends Document {
  readonly _id:string;
  readonly title: string;
  readonly subject: string;
  readonly owner: string;
  readonly participants: [string];
  readonly messages: [string];


}