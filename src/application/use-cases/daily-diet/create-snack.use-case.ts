import { UseCase } from "../use-case";

interface CreateSnackUseCaseRequest {}
interface CreateSnackUseCaseResponse {}

export class CreateSnackUseCase implements UseCase<CreateSnackUseCaseRequest, CreateSnackUseCaseResponse> {
    execute(request: CreateSnackUseCaseRequest): Promise<CreateSnackUseCaseResponse> {
        return
    }
}