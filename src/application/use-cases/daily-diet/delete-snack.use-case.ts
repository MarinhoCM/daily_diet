import { UseCase } from "../use-case";

interface DeleteSnackUseCaseRequest { }
interface DeleteSnackUseCaseResponse { }

export class DeleteSnackUseCase implements UseCase<DeleteSnackUseCaseRequest, DeleteSnackUseCaseResponse> {
    execute(request: DeleteSnackUseCaseRequest): Promise<DeleteSnackUseCaseResponse> {
        return;
    }
}