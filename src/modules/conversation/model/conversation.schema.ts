import * as mongoose from 'mongoose';

export const ConversationSchema = new mongoose.Schema({
  name: String,
  message: String,
  time: Number,
});