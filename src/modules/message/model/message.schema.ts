import * as mongoose from 'mongoose';


export const MessageSchema = new mongoose.Schema({
   message_contents: String,
});