import { Controller, Get, Param} from '@nestjs/common';
import { ServicoService } from '../service/servico.service';

@Controller('/api/v1/donna/servico')
export class ServicoController {

    constructor(private servicoService: ServicoService){}
  
    @Get()
    async listaServicos(){
      const servicos = await this.servicoService.listaServicos();

      return servicos;
    }

    @Get('/:id')
    async listaServicosPorFuncionario(
      @Param('id') funcionarioId: string) {
      const servicosPorFuncionario = await this.servicoService.listaServicosPorFuncionario(funcionarioId);

      return servicosPorFuncionario;
    }
}
