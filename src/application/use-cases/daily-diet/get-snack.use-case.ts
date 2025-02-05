import { UseCase } from "../use-case";

interface GetSnackUseCaseRequest { }
interface GetSnackUseCaseResponse { }

export class GetSnackUseCase implements UseCase<GetSnackUseCaseRequest, GetSnackUseCaseResponse> {
    execute(request: GetSnackUseCaseRequest): Promise<GetSnackUseCaseResponse> {
        return;
    }
}