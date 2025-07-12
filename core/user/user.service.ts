import { Injectable } from '@nestjs/common';
import { PrismaService } from 'core/database/prisma.service';
import { UserDTO } from './dto/userDTO';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO) {
    const usuario = await this.prisma.usuario.create({ data });
    return usuario;
  }

  async findAll(invertido: string) {
    if (invertido === 'true') {
      return (await this.prisma.usuario.findMany()).reverse();
    }
    return await this.prisma.usuario.findMany();
  }
}
