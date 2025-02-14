import { Body, Controller, Get, Logger, Post, Put, Query, Res } from "@nestjs/common";
import { Response } from 'express';
import { CreateUserUseCase, GetAllUserUseCase } from "src/application/use-cases/daily-diet";
import { CreateUsersDto } from "../dto/create-users.dto";
import { GetUsersDto } from "../dto/get-users.dto";
import { IUpdateUser } from "../interfaces";

@Controller('user')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  private readonly serviceLogName = '[USER API]'

  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getAllUserUseCase: GetAllUserUseCase
  ) { }

  @Post()
  async createUser(@Body() user: CreateUsersDto, @Res() res: Response) {
    const result = await this.createUserUseCase.execute(user);
    return res.status(201).json({
      success: true,
      data: result
    });
  }

  @Get()
  async getUsers(@Query() filter: GetUsersDto, @Res() res: Response) {
    const result = await this.getAllUserUseCase.execute()

    return res.status(200).json({
      success: true,
      data: result
    })
  }

  @Put()
  async updateUser(){
    return 
  }
}