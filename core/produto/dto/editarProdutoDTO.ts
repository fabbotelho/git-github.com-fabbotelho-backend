import { IsString, IsEmpty, Length, IsNumber, IsOptional } from "class-validator";

export class EditarProdutoDTO {
    @IsOptional()
    id?: number;
    @IsOptional()
    @IsEmpty({ message: 'O nome não pode ficar vazio!' })
    @IsString({ message: 'O nome precisa ser uma string!' })
    @Length(3, 50, { message: 'O tamanho não pode ficar menor que 3 caracteres e nem maior que 50 caracteres!' })
    nome?: string;
    @IsOptional()
    @IsEmpty({ message: 'O preço não pode ficar vazio!' })
    @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'O preço precisa ser um número válido!' })
    preco?: number;
}