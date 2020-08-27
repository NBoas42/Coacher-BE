import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards} from '@nestjs/common';
import { AddressService } from './providers/address.service';
import { CreateAddressDto } from './dto/createAddress.dto';
import { ValidationPipe } from 'src/utils/validation.pipe';
import { UpdateAddressDto } from './dto/updateAddress.dto';
import { JwtAuthGuard } from '../auth/gaurds/jwt.gaurd';
import { needsRoles } from '../auth/decorator/roles.decorator';
import { RolesGuard } from '../auth/gaurds/roles.gaurd';

@Controller("address")
export class AddressController {
  constructor(private readonly AddressService: AddressService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body(new ValidationPipe()) CreateAddressDto: CreateAddressDto) {
    return this.AddressService.create(CreateAddressDto);
  }

  @Get("/all")
  @needsRoles("Admin")
  @UseGuards(JwtAuthGuard,RolesGuard)
  getAllUsers() {
    return this.AddressService.findAll();
  }

  @Get("/:id")
  @UseGuards(JwtAuthGuard)
  getUserById(
    @Param("id") id:string
  ) {
    return this.AddressService.findById(id);
  }

  @Patch("/:id")
  @UseGuards(JwtAuthGuard)
  patachUserById(
    @Param("id") id:string,
    @Body(new ValidationPipe()) dto: UpdateAddressDto,
  ){
    return this.AddressService.patchById(id,dto);
  }

  @Delete("/:id")
  @UseGuards(JwtAuthGuard)
  deleteUserById(
    @Param("id") id:string
  ) {
    return this.AddressService.findById(id);
  }

}