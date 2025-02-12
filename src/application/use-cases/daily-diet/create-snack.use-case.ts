import { Snack } from "src/application/entities";
import { UseCase } from "../use-case";
import { Injectable } from "@nestjs/common";

interface CreateSnackUseCaseRequest {
    name: string;
    datetime: Date;
    description: string;
    from_diet: boolean;
}

export interface CreateSnackUseCaseResponse {
    name: string;
    datetime: Date;
    description: string;
    from_diet: boolean;
}

@Injectable()
export class CreateSnackUseCase implements UseCase<CreateSnackUseCaseRequest, CreateSnackUseCaseResponse> {
    constructor() { }
    async execute(request: CreateSnackUseCaseRequest): Promise<CreateSnackUseCaseResponse> {
        const { name, datetime, description, from_diet } = request;
        const createdSnack = new Snack(name, datetime, description, from_diet);
        return {
            name: createdSnack.name,
            datetime: createdSnack.datetime,
            description: createdSnack.description,
            from_diet: createdSnack.from_diet
        }
    }
}