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
    default:[]
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
    default:[]
  }],
},
  {
    timestamps: true
  });