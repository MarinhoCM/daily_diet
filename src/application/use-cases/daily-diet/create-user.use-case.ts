import { Logger } from "@nestjs/common";
import { UseCase } from "../use-case";

interface CreateUserUseCaseRequest { }
export interface CreateUserUseCaseResponse { }

export class CreateUserUseCase implements UseCase<CreateUserUseCaseRequest, CreateUserUseCaseResponse> {
    private readonly logger = new Logger(CreateUserUseCase.name)

    constructor(
            
    ) { }

    execute(request: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        this.logger.log(`Iniciando a criação de usuário`);
        return;
    }
}
