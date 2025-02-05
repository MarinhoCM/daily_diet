import { Controller, Logger, Post, Query, Res } from "@nestjs/common";
import { Response } from "express";
import { GetSnackUseCase } from "src/application/use-cases/daily-diet";

@Controller('snack')
export class SnackController {
    private readonly logger = new Logger(SnackController.name);
    private readonly serviceLogName = '[SNACK API]'
    constructor(
        private readonly getSnackUseCase: GetSnackUseCase        
    ) { }

    @Post()
    async getSnack(@Query() filter, @Res() res: Response) {
        this.logger.log(`${this.serviceLogName} Iniciando consulta de refeições`);
        const result = await this.getSnackUseCase.execute(filter);
        return res.status(200).json({
            success: true,
            data: result
        })        
    }
}