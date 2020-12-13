import * as mongoose from 'mongoose';

export const ScheduleItemSchema = new mongoose.Schema({
   name: { type: String },
   description: {
      type: String,
      default: ""
   },
   startDate: { type: Date },
   endDate: { type: Date },
   available: {
      type: Boolean,
      default: true
   },
   repeates: {
      type: String,
      default: false
   },
});