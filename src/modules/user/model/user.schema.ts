import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
   type: String,
   firstName: String,
   lastName:String,
   phoneNumber:String,
   website:String,
   about:String,
   password:{
      type:String,
      select: false
   },
   email: {
      type: String,
      unique:true,
      lowercase: true,
   },
   address:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Address',
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