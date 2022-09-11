import { IsString } from "class-validator";

export class CreateUser {
    @IsString()
    name: string;
    @IsString()
    password: string;
    @IsString()
    confirmPassword: string;
}