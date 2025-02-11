import { Snack } from "src/application/entities";
import { UseCase } from "../use-case";

interface CreateSnackUseCaseRequest {
    name: string;
    datetime: Date;
    description: string;
    from_diet: boolean;
}

export interface CreateSnackUseCaseResponse { }

export class CreateSnackUseCase implements UseCase<CreateSnackUseCaseRequest, CreateSnackUseCaseResponse> {
    execute(request: CreateSnackUseCaseRequest): Promise<CreateSnackUseCaseResponse> {
        const { name, datetime, description, from_diet } = request;
        const createdSnack = new Snack(name, datetime, description, from_diet);
        return;
    }
}
