import * as mongoose from 'mongoose';


export const MessageSchema = new mongoose.Schema({
   messageContents: String,
   sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
},
{
   timestamps: true
 });