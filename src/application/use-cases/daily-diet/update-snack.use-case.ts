import { UseCase } from "../use-case";

interface UpdateSnackUseCaseRequest { }
interface UpdateSnackUseCaseResponse { }

export class UpdateSnackUseCase implements UseCase<UpdateSnackUseCaseRequest, UpdateSnackUseCaseResponse> {
    execute(request: UpdateSnackUseCaseRequest): Promise<UpdateSnackUseCaseResponse> {
        return;
    }
}