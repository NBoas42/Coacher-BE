import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
   type: String,
   firstName: String,
   lastName:String,
   email: {
      type: String,
      unique:true
   },
   phoneNumber:String,
   website:String,
   about:String,
   address:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Address'
   },
   scheduleItems:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'ScheduleItem'
   }],
   classes:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Class'
   }]
});