import { UseCase } from "../use-case";

interface CreateDietUseCaseRequest {}
interface CreateDietUseCaseResponse {}

export class CreateDietUseCase implements UseCase<CreateDietUseCaseRequest, CreateDietUseCaseResponse> {
    execute(request: CreateDietUseCaseRequest): Promise<CreateDietUseCaseResponse> {
        return
    }
}
