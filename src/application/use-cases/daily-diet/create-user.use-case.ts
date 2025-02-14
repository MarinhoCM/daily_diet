import { Injectable, Logger } from "@nestjs/common";
import { UseCase } from "../use-case";
import { UserRepository } from "@infra/database/prisma/repositories/users.repository";

interface CreateUserUseCaseRequest { 
    name: string;
    username: string;
    email: string;
}

export interface CreateUserUseCaseResponse { }


@Injectable()
export class CreateUserUseCase implements UseCase<CreateUserUseCaseRequest, CreateUserUseCaseResponse> {
    private readonly logger = new Logger(CreateUserUseCase.name)

    constructor(
        private readonly userRepository: UserRepository    
    ) { }

    async execute(request: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        this.logger.log(`Iniciando a criação de usuário: ${JSON.stringify(request, null, 4)}`);
        return await this.userRepository.createUser(request);
    }
}
