import * as mongoose from 'mongoose';


export const MessageSchema = new mongoose.Schema({
   messageContents: String,
   sender:{
      
   }
},

{
   timestamps: true
 });