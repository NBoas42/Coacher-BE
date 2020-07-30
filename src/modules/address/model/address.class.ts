import { Document } from 'mongoose';


export class Address extends Document {
  _id: string;
  country: string;
  zipCode:string;
  state: string;
  city:string;
  streetAddress: string;
  appartmentNumber:string;
}