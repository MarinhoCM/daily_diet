import { UseCase } from "../use-case";

interface GetAllUserUseCaseRequest { }
interface GetAllUserUseCaseResponse { }

export class GetAllUserUseCase implements UseCase<GetAllUserUseCaseRequest, GetAllUserUseCaseResponse>{
    execute(request: GetAllUserUseCaseRequest): Promise<GetAllUserUseCaseResponse> {
        return;
    }
}