import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { Address } from '../model/address.interface';
import { CreateAddressDto } from '../dto/createAddress.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel('Address')
    private AddressModel: Model<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto | string): Promise<Address> {
    const createdAddress = new this.AddressModel(createAddressDto);
    return createdAddress.save();
  }

  async findAll(): Promise<Address[]> {
    return this.AddressModel.find();
  }

  async findById(id): Promise<Address> {
    return this.AddressModel.findById(id);
  }

  async patchById(id, dto):Promise<Address>{
    // eslint-disable-next-line prefer-const
    let addressToUpdate =  await this.AddressModel.findById(id).exec();
    Object.keys(dto).forEach(key =>{
      if(key ==="address"){

      }
      addressToUpdate[key] = dto[key];
    });
   return addressToUpdate.save();
  }

  async deleteById(id):Promise<Address>{
    return this.AddressModel.findOneAndDelete({
      _id:id
    });
  }
}