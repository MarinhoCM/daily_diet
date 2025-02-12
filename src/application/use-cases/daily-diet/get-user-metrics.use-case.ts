import { Injectable } from "@nestjs/common";
import { UseCase } from "../use-case";

interface GetUserMetricsUseCaseRequest { }
interface GetUserMetricsUseCaseResponse { }

@Injectable()
export class GetUserMetricsUseCase implements UseCase<GetUserMetricsUseCaseRequest, GetUserMetricsUseCaseResponse>{
    execute(request: GetUserMetricsUseCaseRequest): Promise<GetUserMetricsUseCaseResponse> {
        return;
    }
}