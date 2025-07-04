import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }

  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000; // порт з оточення або дефолт 3000
  await app.listen(port, '0.0.0.0'); // слухати на 0.0.0.0, щоб приймати зовнішні з’єднання
}

bootstrap();
