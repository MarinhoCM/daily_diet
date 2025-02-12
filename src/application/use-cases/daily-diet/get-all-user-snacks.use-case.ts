import { Injectable } from "@nestjs/common";
import { UseCase } from "../use-case";

interface GetAllUserUseCaseRequest { }
interface GetAllUserUseCaseResponse { }


@Injectable()
export class GetAllUserUseCase implements UseCase<GetAllUserUseCaseRequest, GetAllUserUseCaseResponse>{
    execute(request: GetAllUserUseCaseRequest): Promise<GetAllUserUseCaseResponse> {
        return;
    }
}