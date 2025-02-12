import { Injectable } from "@nestjs/common";
import { UseCase } from "../use-case";

interface GetSnackUseCaseRequest { }
interface GetSnackUseCaseResponse { }

@Injectable()
export class GetSnackUseCase implements UseCase<GetSnackUseCaseRequest, GetSnackUseCaseResponse> {
    execute(request: GetSnackUseCaseRequest): Promise<GetSnackUseCaseResponse> {
        return;
    }
}