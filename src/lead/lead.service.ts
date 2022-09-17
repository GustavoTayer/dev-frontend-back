/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseService } from 'src/course/course.service';
import { Repository } from 'typeorm';
import { createLead } from './dto/create-lead.dto';
import { Lead } from './model/lead.entity';

@Injectable()
export class LeadService {
    constructor(@InjectRepository(Lead) private repository: Repository<Lead>,
    private readonly courseService: CourseService) { }

    async create(createDto: createLead): Promise<Lead> {
        var course = await this.courseService.findById(createDto.courseId)
       
        const toSave = this.repository.create({
           ...createDto,
           course
        })

        return this.repository.save(toSave)
    }

    async findAll(): Promise<Lead[]> {
        return this.repository.find()
    }
 }
