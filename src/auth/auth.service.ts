/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createCipheriv, createDecipheriv, randomBytes, scrypt, scryptSync } from 'crypto';
import { CreateUser } from 'src/user/dto/createUser.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { promisify } from 'util';
import {genSaltSync, hashSync, compareSync} from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    async validate(name: string, password: string): Promise<User> {
        const user = await this.userService.findByName(name)
        console.log('senhaaa', password)
        if (!user || !this.validatePassword(user, password)) {
            throw new UnauthorizedException();
        }
        return user;
    }

    async create(user: CreateUser): Promise<User> {
        if (user.confirmPassword != user.password) {
            throw new BadRequestException('Password and confirm password are not equals')
        }
        const salt = genSaltSync();
        const passwordHash = hashSync(user.password, salt);
        user.password = passwordHash;
        return this.userService.create(user)
    }

    private getSecrets(): any {
        return {
            iv: randomBytes(16),
            key: '12345678901234567890123456789012' // this should be hidden 
        }
    }

    private validatePassword(user: User, passwordInformed: string): boolean {
        console.log(user, passwordInformed)
        return compareSync(passwordInformed, user.password)
    }

    async login(loginUser: any) {
        // const user = await this.validate(loginUser.username, loginUser.password)
        console.log(loginUser)
        const payload = loginUser
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
