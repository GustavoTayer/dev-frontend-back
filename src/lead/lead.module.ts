import { LeadService } from './lead.service';
import { LeadController } from './lead.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Lead } from './model/lead.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from 'src/course/course.module';

@Module({
    imports: [TypeOrmModule.forFeature([Lead]), CourseModule],
    controllers: [
        LeadController,],
    providers: [
        LeadService,],
})
export class LeadModule { }
