import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { FuncionarioDto } from '../dto/funcionario.dto';
import { FuncionarioService } from '../service/funcionario.service';

@Controller('funcionario')
export class FuncionarioController {

    constructor(private userService: FuncionarioService){}

    @Post()
    create(@Body() user: FuncionarioDto): Promise<FuncionarioDto> {
      return this.userService.create(user);
    }
  
    @Get()
    async findAll(): Promise<FuncionarioDto[]> {
      return this.userService.findAll();
    }
}
