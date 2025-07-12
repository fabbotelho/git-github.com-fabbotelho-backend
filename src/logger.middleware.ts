import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('🔍 Requisição recebida:');
        console.log('URL:', req.url);
        console.log('Body:', req.body);
        next();
    }
}