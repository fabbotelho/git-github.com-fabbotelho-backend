import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from './dto/produtoDTO';
import { EditarProdutoDTO } from './dto/editarProdutoDTO';
import { PrismaService } from 'core/database/prisma.service';

@Injectable()
export class ProdutoService {

    constructor(private prisma: PrismaService) { }


    async create(data: ProdutoDTO) {
        const produto = await this.prisma.produto.create({ data });
        return produto;
    }

    async findAll(invertido: string) {
        if (invertido === 'true') {
            return (await this.prisma.produto.findMany()).reverse();
        }
        return await this.prisma.produto.findMany();
    }

    async findOne(id: number) {
        const produtoExists = await this.prisma.produto.findUnique({ where: { id } });
        if (!produtoExists) {
            throw new Error('Produto não encontrado!');
        }
        return produtoExists;
    }

    async update(id: number, data: EditarProdutoDTO) {
        const produtoExists = await this.prisma.produto.findUnique({ where: { id } });
        if (!produtoExists) {

        }
        return await this.prisma.produto.update({ where: { id }, data });
    }

    async delete(id: number) {
        const produtoExists = await this.prisma.produto.findUnique({ where: { id } });
        if (!produtoExists) {
            throw new Error('Produto não encontrado!');
        }
        return await this.prisma.produto.delete({ where: { id } });
        console.log('Produto deletado com sucesso!');
    }
}
