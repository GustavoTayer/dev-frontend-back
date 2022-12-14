import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column({unique: true})
    email: string;
  
    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: Role,
        nullable: true
    })
    role?: Role;
  
    @Column({ default: false })
    deleted: boolean;
}