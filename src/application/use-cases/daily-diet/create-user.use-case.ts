import { UseCase } from "../use-case";

interface CreateUserUseCaseRequest { }
export interface CreateUserUseCaseResponse { }

export class CreateUserUseCase implements UseCase<CreateUserUseCaseRequest, CreateUserUseCaseResponse> {
    execute(request: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        return;
    }
}