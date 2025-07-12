import { IsString, IsEmpty, Length, IsNumber, IsOptional, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class ProdutoDTO {

    @IsOptional()
    id?: number;

    @IsNotEmpty({ message: 'O nome não pode ficar vazio!' })
    @IsString({ message: 'O nome precisa ser uma string!' })
    @Length(3, 50, { message: 'O nome deve ficar entre 5 e 50 caracteres!' })
    nome: string;

    @IsOptional()
    @IsString({ message: 'A descrição precisa ser uma string!' })
    //@Length(15, 150, { message: 'A descrição deve ficar entre 15 e 150 caracteres!' })
    descricao?: string;

    @IsOptional()
    @IsString({ message: 'A categoria precisa ser uma string!' })
    //@Length(5, 50, { message: 'A categoria deve ficar entre 5 e 50 caracteres!' })
    categoria?: string;

    @IsOptional()
    @IsString({ message: 'O caminho precisa ser uma string!' })
    imagem?: string;

    @IsNotEmpty({ message: 'O estoque não pode ficar vazio!' })
    @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'O estoque precisa ser um número válido!' })
    @Type(() => Number)
    estoque: number;

    @IsNotEmpty({ message: 'O preço não pode ficar vazio!' })
    @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'O preço precisa ser um número válido!' })
    @Type(() => Number)
    preco: number;
}