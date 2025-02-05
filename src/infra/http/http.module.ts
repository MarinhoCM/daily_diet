import { Module } from '@nestjs/common';
import { DailyDietModule } from './daily_diet/daily_diet.module';

@Module({
    imports: [DailyDietModule],
    controllers: [],
    providers: [],
})
export class HttpModule { }
