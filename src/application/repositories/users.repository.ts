import { User } from "../entities";
import { ICreateUser, IGetUser, IUpdateUser } from "../interfaces";

export interface UsersRepository {
    CreateUsers(user: ICreateUser): User;
    DeleteUsers(userId: number): number;
    UpdateUsers(user: IUpdateUser): User;
    GetUsers(filter: IGetUser): User;
}
