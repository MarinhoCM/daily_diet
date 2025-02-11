import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { DietController, SnackController } from './controllers';
import { CreateDietUseCase, CreateUserUseCase, GetAllUserUseCase, GetSnackUseCase, GetUserMetricsUseCase } from 'src/application/use-cases/daily-diet';

@Module({
  imports: [CreateUserUseCase, GetAllUserUseCase, CreateDietUseCase, GetSnackUseCase, GetUserMetricsUseCase],
  controllers: [UsersController, SnackController, DietController],
  providers: [CreateUserUseCase, GetAllUserUseCase, CreateDietUseCase, GetSnackUseCase, GetUserMetricsUseCase],
})
export class DailyDietModule { }
