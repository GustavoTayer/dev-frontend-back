import { IsEmail } from "class-validator";

export class createLead {
    name: string;
    @IsEmail()
    email: string
    phone: string;
    zipCode: string;
    courseId: number
}