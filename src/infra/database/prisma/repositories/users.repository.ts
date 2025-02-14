import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { UserNotFoundException } from "src/application/exceptions";
import { PrismaService } from "../prisma.service";

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({ data });
    }

    async findUserById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id_user: id } });
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findFirst({ where: { email } });
    }

    async findAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
        return this.prisma.user.update({
            where: { id_user: id },
            data,
        });
    }

    async delete(userId: number, reason: string) {
        const deletedUser = await this.prisma.user.findFirst({
            where: {
                id_user: userId
            }
        });

        if (!deletedUser) {
            throw new UserNotFoundException(`Não foi possivel identificar o usuário com id ${userId} na base de dados`);
        }

        await this.prisma.user.delete({
            where: {
                id_user: deletedUser.id_user
            }
        });

        const deletedUserModel = {
            name: deletedUser.name,
            username: deletedUser.username,
            email: deletedUser.email,
            description: reason,
            deleted_at: new Date()
        }

        await this.prisma.userLgpd.create({
            data: deletedUserModel
        });

        return deletedUserModel;
    };
}
