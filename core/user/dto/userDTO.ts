import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UserDTO {
  @IsOptional()
  id?: number;

  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  senha: string;

  @IsBoolean()
  ativo: boolean;

  @IsBoolean()
  admin: boolean;

  @IsString()
  createdAt: string;
}
