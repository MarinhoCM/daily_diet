import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { DietController, SnackController } from './controllers';

@Module({
  imports: [],
  controllers: [UsersController, SnackController, DietController],
  providers: [],
})
export class DailyDietModule { }
