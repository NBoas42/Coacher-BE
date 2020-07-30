import * as mongoose from 'mongoose';
import { PRICE_TYPE } from './class.class';

export const ClassSchema = new mongoose.Schema({
   name: { type: String },
   description: { type: String },
   location: { 
      type: mongoose.Schema.Types.ObjectId,
      ref:'Address' },
   price: { 
      type: Number,
      default: PRICE_TYPE.FREE },
   priceType: {
      type: PRICE_TYPE,
      default: 0
   },
   schedule:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'ScheduleItem'
   }],
   owner:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Owner'
   },
   participants:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'User'}
   ]
});