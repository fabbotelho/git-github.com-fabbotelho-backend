import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from 'core/produto/produto.module';
import { LoggerMiddleware } from './logger.middleware';
import { UserModule } from 'core/user/user.module';

@Module({
  imports: [ProdutoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // Aplica em todas as rotas
  }
}
