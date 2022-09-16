import { IsEmail, IsString } from "class-validator";
import { Role } from "../model/role.enum";

export class CreateUser {
    @IsString()
    name: string;
    @IsString()
    password: string;
    @IsString()
    confirmPassword: string;
    
    @IsEmail()
    email: string;

    role?: Role;
}