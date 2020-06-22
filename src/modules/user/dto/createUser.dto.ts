import { USER_TYPE } from "../model/user.interface";

export class CreateUserDto {
   type: USER_TYPE;
   firstName: string;
   lastName:string;
   email: string;
   phoneNumber:string;
   website:string;
   about:string;
  }