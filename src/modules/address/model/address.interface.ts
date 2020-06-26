import { Document } from 'mongoose';


export interface Address extends Document {
  country: string;
  zipCode:string;
  state: string;
  city:string;
  streetAddress: string;
  appartmentNumber:string;
}