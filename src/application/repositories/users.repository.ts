import { User } from "../entities";
import { ICreateUser, IGetUser, IUpdateUser } from "../../infra/http/daily_diet/interfaces";

export interface UsersRepository {
    CreateUsers(user: ICreateUser): User;
    DeleteUsers(userId: number): number;
    UpdateUsers(user: IUpdateUser): User;
    GetUsers(filter: IGetUser): User;
}
