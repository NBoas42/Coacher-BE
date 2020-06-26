import { Document } from 'mongoose';


export interface Address extends Document {
  _id: string;
  country: string;
  zipCode:string;
  state: string;
  city:string;
  streetAddress: string;
  appartmentNumber:string;
}