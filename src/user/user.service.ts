/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUser } from './dto/createUser.dto';
import { Role } from './model/role.enum';
import { User } from './model/user.entity';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repository: Repository<User>) { }

    async create(user: CreateUser): Promise<User> {
       
        const userToSave = this.repository.create({
            name: user.name,
            password: user.password,
            email: user.email,
            role: user.role || Role.TEACHER
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
