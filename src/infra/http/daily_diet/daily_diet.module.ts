import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreateDietUseCase, CreateSnackUseCase, CreateUserUseCase, GetAllUserUseCase, GetSnackUseCase, GetUserMetricsUseCase } from 'src/application/use-cases/daily-diet';
import { DietController, SnackController } from './controllers';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    UsersController, SnackController, DietController
  ],
  providers: [
    CreateUserUseCase, GetAllUserUseCase, CreateDietUseCase,
    GetSnackUseCase, GetUserMetricsUseCase, CreateSnackUseCase
  ],
})
export class DailyDietModule { }
