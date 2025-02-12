import { Body, Controller, Get, Logger, Post, Query, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateSnackUseCase, GetSnackUseCase } from "src/application/use-cases/daily-diet";
import { ICreateSnack } from "../interfaces";

@Controller('snack')
export class SnackController {
    private readonly logger = new Logger(SnackController.name);
    private readonly serviceLogName = '[SNACK API]'
    constructor(
        private readonly createSnackUseCase: CreateSnackUseCase,
        private readonly getSnackUseCase: GetSnackUseCase
    ) { }

    @Get()
    async getSnack(@Query() filter, @Res() res: Response) {
        this.logger.log(`${this.serviceLogName} Iniciando consulta de refeições`);
        const result = await this.getSnackUseCase.execute(filter);
        return res.status(200).json({
            success: true,
            data: result
        })
    }
    
    @Post()
    async createSnack(@Body() snack: ICreateSnack, @Res() res: Response){
        const result = await this.createSnackUseCase.execute(snack);
        return res.status(200).json({
            success: true,
            data: result
        })
    }
}