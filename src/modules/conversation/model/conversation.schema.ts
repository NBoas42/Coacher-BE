import * as mongoose from 'mongoose';

export const ConversationSchema = new mongoose.Schema({
  title: String,
  subject: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  }],
},
  {
    timestamps: true
  });