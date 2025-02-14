import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { DietController, SnackController } from './controllers';
import { CreateDietUseCase, CreateSnackUseCase, CreateUserUseCase, GetAllUserUseCase, GetSnackUseCase, GetUserMetricsUseCase } from 'src/application/use-cases/daily-diet';

@Module({
  imports: [],
  controllers: [UsersController, SnackController, DietController],
  providers: [CreateUserUseCase, GetAllUserUseCase, CreateDietUseCase, GetSnackUseCase, GetUserMetricsUseCase, CreateSnackUseCase],
})
export class DailyDietModule { }
