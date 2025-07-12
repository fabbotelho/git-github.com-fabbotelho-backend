import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,   // Converte tipos automaticamente (ex: string -> number)
      whitelist: true,   // Remove campos não definidos no DTO
      forbidNonWhitelisted: true, // Retorna erro se houver campos extras
      skipMissingProperties: false,
      validationError: {
        target: false, // Não retorna o objeto inválido
        value: false,
      },
    }))

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
