import { UseCase } from "../use-case";

interface GetUserMetricsUseCaseRequest { }
interface GetUserMetricsUseCaseResponse { }

export class GetUserMetricsUseCase implements UseCase<GetUserMetricsUseCaseRequest, GetUserMetricsUseCaseResponse>{
    execute(request: GetUserMetricsUseCaseRequest): Promise<GetUserMetricsUseCaseResponse> {
        return;
    }
}