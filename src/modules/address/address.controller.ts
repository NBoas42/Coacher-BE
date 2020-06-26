import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { AddressService } from './providers/address.service';
import { CreateAddressDto } from './dto/createAddress.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateAddressDto } from './dto/updateAddress.dto';

@Controller("address")
export class AddressController {
  constructor(private readonly AddressService: AddressService) {}

  @Post()
  create(@Body(new ValidationPipe()) CreateAddressDto: CreateAddressDto) {
    return this.AddressService.create(CreateAddressDto);
  }

  @Get("/all")
  getAllUsers() {
    return this.AddressService.findAll();
  }

  @Get("/:id")
  getUserById(
    @Param("id") id
  ) {
    return this.AddressService.findById(id);
  }

  @Patch("/:id")
  patachUserById(
    @Param("id") id,
    @Body(new ValidationPipe()) dto: UpdateAddressDto,
  ){
    return this.AddressService.patchById(id,dto);
  }

  @Delete("/:id")
  deleteUserById(
    @Param("id") id
  ) {
    return this.AddressService.findById(id);
  }

}