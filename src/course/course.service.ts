/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourse } from './create-course.dto';

@Injectable()
export class CourseService { 
    constructor(@InjectRepository(Course) private repository: Repository<Course>) { }

    async create(course: CreateCourse): Promise<Course> {
       
        const toSave = this.repository.create({
           ...course
        })

        return this.repository.save(toSave)
    }

    async findAll(): Promise<Course[]> {
        return this.repository.find()
    }

    async findById(id: number): Promise<Course> {
        return this.repository.findOneBy({id})
    }

    async autoComplete(q: string): Promise<Course[]> {
        return this.repository.createQueryBuilder("course")
        .where("lower(course.name) like lower(:q)", {q: `%${q}%`})
        .limit(10)
        .getMany()
    }
}
