import { Injectable } from "@nestjs/common";
import { Diet, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class DietRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createDiet(data: Prisma.DietCreateInput): Promise<Diet> {
    return await await this.prisma.diet.create({ data });
  }

  async findDietById(id: number): Promise<Diet | null> {
    return await this.prisma.diet.findUnique({ where: { id_diet: id } });
  }

  async findAllDiets(): Promise<Diet[]> {
    return await this.prisma.diet.findMany();
  }

  async updateDiet(id: number, data: Prisma.DietUpdateInput): Promise<Diet> {
    return await this.prisma.diet.update({
      where: { id_diet: id },
      data,
    });
  }

  async deleteDiet(id: number, reason: string = ""): Promise<Diet> {
    return await this.prisma.diet.delete({ where: { id_diet: id } });
  }
}
