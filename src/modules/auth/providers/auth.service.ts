import { Injectable, BadRequestException, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/user/model/user.class';
import * as bcrypt from "bcrypt";
import { UserService } from 'src/modules/user/providers/user.service';
import { LoginUserDto } from 'src/modules/auth/dto/loginUser.dto';

@Injectable()
export class AuthService {

    constructor (
        private readonly jswtService: JwtService,
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
        ){}


    generateJWT(user: User): Promise<string> {
        return this.jswtService.signAsync({user});
    }


    hashPassword(password: string): string {
        return bcrypt.hash(password,12);
    }

    comparePasswords(newPassword: string, passwordHash:string):boolean {
        return bcrypt.compare(newPassword, passwordHash);
    }

    async login(dto: LoginUserDto): Promise<any>{
        const isValidLogin = await this.validateUser(dto.email,dto.password);
        if(isValidLogin){
          const user = await this.userService.findByEmail(dto.email);
          return {token:await this.generateJWT(user)};
        }else{
          throw new BadRequestException('Incorrect Password or Email');
        }
      }
    
      async validateUser(email:string, password:string): Promise<boolean>{
        const user = await this.userService.findByEmailWithPassword(email);
        const match = await this.comparePasswords(password,user.password);
        return match;
      }

}
