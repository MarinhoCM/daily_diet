import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { srvConfig } from './config/settings.config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger(bootstrap.name);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))

  await app.listen(srvConfig.port, '0.0.0.0');
  logger.log(`Serving listening on port: ${srvConfig.port}`)
}
bootstrap();
