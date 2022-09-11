/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from './dto/createUser.dto';
import { UserResponse } from './dto/userResponse.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('signup')
    signup(@Body() user: CreateUser): Promise<UserResponse> {
        return {...this.userService.create(user)};
    }
 }
