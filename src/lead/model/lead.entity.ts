import { type } from "os";
import { Course } from "src/course/course.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lead {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string

    @Column()
    phone: string;

    @Column()
    zipCode: string;

    @ManyToOne(type => Course, course => course.id)
    course: Course
}