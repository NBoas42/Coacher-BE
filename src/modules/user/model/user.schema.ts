import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
   type: String,
   firstName: String,
   lastName:String,
   email: String,
   phoneNumber:String,
   website:String,
   about:String,
   address:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Address'
   },
   schedule:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'ScheduleItem'
   }]
});