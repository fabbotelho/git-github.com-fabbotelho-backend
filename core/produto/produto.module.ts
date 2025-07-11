import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { PrismaService } from 'core/database/prisma.service';

@Module({
    providers: [ProdutoService, PrismaService],
    controllers: [ProdutoController],
})
export class ProdutoModule { }
