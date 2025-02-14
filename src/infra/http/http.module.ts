import { UserRepository } from '@infra/database/prisma/repositories/users.repository';
import { Module } from '@nestjs/common';
import { DailyDietModule } from './daily_diet/daily_diet.module';
import { PrismaService } from '@infra/database/prisma/prisma.service';

@Module({
    imports: [DailyDietModule],
    controllers: [],
    providers: [PrismaService, UserRepository],
})
export class HttpModule { }
