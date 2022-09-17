import { CourseService } from './course.service';
import { CourseController } from './course.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Course])],
    controllers: [
        CourseController,],
    providers: [
        CourseService,],
    exports: [CourseService]
})
export class CourseModule {
}
