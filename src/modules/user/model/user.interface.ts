import { Document } from 'mongoose';
import { IsDefined } from 'class-validator';

export enum USER_TYPE {
  COACH="COACH",
  COACHEE="COACHEE",
  ADMIN="ADMIN",
}

export interface User extends Document {
  readonly type: USER_TYPE;
  readonly firstName: string;
  readonly lastName:string;
  readonly email: string;
  readonly phoneNumber:string;
  readonly website:string;
  readonly about:string;
}