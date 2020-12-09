import { Document } from 'mongoose';
import { IsDefined } from 'class-validator';
import { User } from 'src/modules/user/model/user.class';


export interface Message extends Document {
  readonly _id:string;
  readonly message_contents: string;
  readonly sender: User;
}