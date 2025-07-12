import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/userDTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() usuario: UserDTO) {
    console.log('Dados recebidos:', usuario);
    return this.userService.create(usuario);
  }

  @Get()
  async findAll(@Query('invertido') invertido: string) {
    return this.userService.findAll(invertido);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }
}
