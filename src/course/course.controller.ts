/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { query } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { CreateCourse } from './create-course.dto';

@ApiTags('course')
@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() create: CreateCourse): Promise<Course> {
        return this.courseService.create(create);
    }

    @Get()
    findAll(): Promise<Course[]> {
        return this.courseService.findAll();
    }

    @Get('/auto-complete')
    autoComplete(@Query() query: {q: string}): Promise<Course[]> {
        return this.courseService.autoComplete(query.q);
    }
}
