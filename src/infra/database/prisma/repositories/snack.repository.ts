import { Injectable } from '@nestjs/common';
import { Prisma, Snack } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SnackRepository {
    constructor(private readonly prisma: PrismaService) { }

    async createSnack(data: Prisma.SnackCreateInput): Promise<Snack> {
        return this.prisma.snack.create({ data });
    }

    async findSnackById(id: number): Promise<Snack | null> {
        return this.prisma.snack.findUnique({ where: { id_snack: id } });
    }

    async findAllSnacks(): Promise<Snack[]> {
        return this.prisma.snack.findMany();
    }

    async updateSnack(id: number, data: Prisma.SnackUpdateInput): Promise<Snack> {
        return this.prisma.snack.update({
            where: { id_snack: id },
            data,
        });
    }

    async deleteSnack(id: number): Promise<Snack> {
        return this.prisma.snack.delete({ where: { id_snack: id } });
    }
}
