import * as mongoose from 'mongoose';

export const ConversationSchema = new mongoose.Schema({
  title: String,
  subject: String,
});