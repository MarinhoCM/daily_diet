import { Controller, Logger, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateDietUseCase } from "src/application/use-cases/daily-diet";

@Controller('diet')
export class DietController {
    private readonly logger = new Logger(DietController.name);
    private readonly serviceLogName = '[DIET API]'

    constructor(
        private readonly createDietUseCase: CreateDietUseCase
    ) { }

    @Post()
    async createDiet(diet, @Res() res: Response){
        this.logger.log(`${this.serviceLogName} Iniciando processamento da requisição ${JSON.stringify(diet, null, 4)}`)
        const result = await this.createDietUseCase.execute(diet)
        return res.status(201).json({
            success: true,
            data: result
        })
    }
}