import { Snack } from "@prisma/client";

export interface ICreateDiet {
    id_diet: number;
    description: string;
    objetive: string;
    user: number;
    snacks?: Snack[];
}

export interface IUpdateDiet { 
    id_diet: number;
    description?: string;
    objetive?: string;
}

export interface IGetDiet { 
    user?: number;
    id_diet?: number;
}