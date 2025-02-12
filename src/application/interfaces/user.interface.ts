import { Snack } from "../entities";

export interface ICreateUser {
    name: string;
    username: string;
    email: string;
    snacks?: Snack[]
}

export interface IUpdateUser {
    name: string;
    username: string;
    email: string;
}

export interface IGetUser {
    id: number;
    name: string;
    username: string;
    email: string;
} 