import { Document } from 'mongoose';
import { IsDefined } from 'class-validator';

export interface User extends Document {
  readonly name: string;
  readonly email: string;
}