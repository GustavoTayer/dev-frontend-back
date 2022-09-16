import { Role } from "../model/role.enum";

export class UserResponse {
    id: number;
    name: string;
    email: string;
    role?: Role;
}