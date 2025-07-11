import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {

    constructor(private readonly produtoService: ProdutoService) { }


    @Post()
    async create(@Body() data: { nome: string; preco: number }) {
        return this.produtoService.create(data);
    }
    @Get()
    async findAll(@Query('invertido') invertido: string) {
        return this.produtoService.findAll(invertido);
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.produtoService.findOne(+id);
    }
    @Put(':id')
    async update(@Param('id') id: number, @Body() data: { nome: string; preco: number }) {
        return this.produtoService.update(+id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.produtoService.delete(+id);
    }

}
