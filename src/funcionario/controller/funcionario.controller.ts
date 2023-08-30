import { Controller, Get } from '@nestjs/common';
import { FuncionarioService } from '../service/funcionario.service';

@Controller('/funcionario')
export class FuncionarioController {

    constructor(private funcionarioService: FuncionarioService){}
  
    @Get()
    async listaFuncionarios(){
      const funcionarios = await this.funcionarioService.listaFuncionarios();

      return funcionarios;
    }
}
