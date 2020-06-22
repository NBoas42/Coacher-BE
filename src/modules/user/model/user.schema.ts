import * as mongoose from 'mongoose';
import { USER_TYPE } from './user.interface';

export const UserSchema = new mongoose.Schema({
   type: String,
   firstName: String,
   lastName:String,
   email: String,
   phoneNumber:String,
   website:String,
   about:String,
});