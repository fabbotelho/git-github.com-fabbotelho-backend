import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Glória Deus !!! Está rodando !';
  }
}
