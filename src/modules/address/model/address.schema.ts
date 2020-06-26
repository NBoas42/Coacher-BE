import * as mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
   country: String,
   zipCode:String,
   state: String,
   city:String,
   streetAddress: String,
   appartmentNumber:String,
});