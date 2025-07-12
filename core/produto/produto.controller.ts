import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoDTO } from './dto/produtoDTO';
import { EditarProdutoDTO } from './dto/editarProdutoDTO';

@Controller('produto')
export class ProdutoController {

    constructor(private readonly produtoService: ProdutoService) { }


    @Post()
    async create(@Body() produto: ProdutoDTO) {
        console.log("Dados recebidos:", produto)
        return this.produtoService.create(produto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() produto: EditarProdutoDTO) {
        return this.produtoService.update(+id, produto);
    }

    @Get()
    async findAll(@Query('invertido') invertido: string) {
        return this.produtoService.findAll(invertido);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.produtoService.findOne(+id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.produtoService.delete(+id);
    }

}
