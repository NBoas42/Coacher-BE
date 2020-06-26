import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {AddressSchema} from './model/address.schema'
import {AddressController} from "./address.controller";
import {AddressService} from "./providers/address.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Address', schema: AddressSchema }])],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService]
})
export class AddressModule{}