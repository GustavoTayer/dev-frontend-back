/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUser } from './dto/createUser.dto';
import { User } from './user.entity';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repository: Repository<User>) { }

    async create(user: CreateUser): Promise<User> {
       
        const userToSave = this.repository.create({
            name: user.name,
            password: user.password
        })

        return this.repository.save(userToSave)
    }

    async login() {
        
    }

    async findByName(name: string): Promise<User> {
        return this.repository.findOneBy({
            name
        })
    }
}
