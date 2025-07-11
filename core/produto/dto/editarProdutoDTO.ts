import { IsString, IsEmpty, Length, IsNumber, IsOptional, IsNotEmpty } from "class-validator";

export class EditarProdutoDTO {
    @IsOptional()
    id?: number;

    @IsOptional()
    @IsNotEmpty({ message: 'O nome não pode ficar vazio!' })
    @IsString({ message: 'O nome precisa ser uma string!' })
    @Length(3, 50, { message: 'O nome deve ficar entre 3 e 50 caracteres!' })
    nome?: string;

    @IsOptional()
    @IsString({ message: 'A descrição precisa ser uma string!' })
    descricao?: string;

    @IsOptional()
    @IsString({ message: 'A categoria precisa ser uma string!' })
    categoria?: string;

    @IsOptional()
    @IsString({ message: 'O caminho precisa ser uma string!' })
    imagem?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'O estoque não pode ficar vazio!' })
    @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'O estoque precisa ser um número válido!' })
    estoque?: number;

    @IsOptional()
    @IsNotEmpty({ message: 'O preço não pode ficar vazio!' })
    @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'O preço precisa ser um número válido!' })
    preco?: number;
}