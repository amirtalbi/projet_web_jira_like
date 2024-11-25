import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const host = process.env.HOST ?? '0.0.0.0';
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000, host);
}
bootstrap();
