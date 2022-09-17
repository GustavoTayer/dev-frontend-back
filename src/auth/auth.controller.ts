/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUser } from 'src/user/dto/createUser.dto';
import { UserResponse } from 'src/user/dto/userResponse.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDto } from './login.dto';

@ApiTags('auth')
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Body() user: LoginDto) {
        return this.authService.login(user);
    }
    
    @Post('auth/signup')
    signup(@Body() user: CreateUser): Promise<UserResponse> {
        return {...this.authService.create(user)};
    }


    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}
