import type { Roles } from "../Roles";

export interface UserInfo{
    _id: string,
    name: string,
    email: string
    role? : Roles;
}