import { Injectable } from "@nestjs/common";
import { UseCase } from "../use-case";
import { UserRepository } from "@infra/database/prisma/repositories/users.repository";

interface GetAllUserUseCaseRequest { }
interface GetAllUserUseCaseResponse { }

@Injectable()
export class GetAllUserUseCase implements UseCase<GetAllUserUseCaseRequest, GetAllUserUseCaseResponse> {

    constructor(
        private readonly usersRepository: UserRepository
    ) { }

    async execute(): Promise<GetAllUserUseCaseResponse> {
        return await this.usersRepository.findAllUsers();
    }
}
