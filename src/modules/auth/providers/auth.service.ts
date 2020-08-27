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

    
    /**
     * Nest Js Jwt wrapper function that generates a jwt token that last 30 minutes.
     * @param user User object to be included in payload section of jwt token
     */
    generateJWT(user: User): Promise<string> {
        return this.jswtService.signAsync({user});
    }

    /**
     * Bcrypt wrapper function to hash a plain text password
     * @param password Password to Be Hashed
     */
    hashPassword(password: string): string {
        return bcrypt.hash(password,12);//A number is used for salt instead of a string to go through 12 random salt generatations
    }


    /**
     * BCrypt wrapper function to check if hashed password matches the plaint text password.
     * @param passwordPlaintText Plain Text Password
     * @param passwordHash Hashed Password
     */
    comparePasswords(passwordPlaintText: string, passwordHash:string):boolean {
        return bcrypt.compare(passwordPlaintText, passwordHash);
    }

    /**
     * This function handles authenticating an attempt for a user to login. If the user
     * provides a succesful Email and Password a jwt token that last for 30 minutes will 
     * be given to the user. If not a bad request exception will be given to the user
     * notifying that the password or email was incorrect. 
     * 
     * @param dto This is of type Login User Dto and contains a password and email field.
     */
    async login(dto: LoginUserDto): Promise<any>{
        const isValidLogin = await this.validateLogin(dto.email,dto.password);
        if(isValidLogin){
          const user = await this.userService.findByEmail(dto.email);
          return {token:await this.generateJWT(user)};
        }else{
          throw new BadRequestException('Incorrect Password or Email');
        }
      }
    

      /**
       * This function checks if the given password matches the password of the 
       * user with the given email.
       * 
       * @param email email of user to validate.
       * @param passwordToValidate password to be checked with the stored user's password 
       */
      async validateLogin(email:string, passwordToValidate:string): Promise<boolean>{
        const user = await this.userService.findByEmailWithPassword(email);
        const isValid = await this.comparePasswords(passwordToValidate,user.password);
        return isValid;
      }

}
