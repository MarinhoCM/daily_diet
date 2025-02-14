import { Injectable } from "@nestjs/common";
import { UseCase } from "../use-case";

interface CreateDietUseCaseRequest { }
interface CreateDietUseCaseResponse { }


@Injectable()
export class CreateDietUseCase implements UseCase<CreateDietUseCaseRequest, CreateDietUseCaseResponse> {
    execute(request: CreateDietUseCaseRequest): Promise<CreateDietUseCaseResponse> {
        return
    }
}
