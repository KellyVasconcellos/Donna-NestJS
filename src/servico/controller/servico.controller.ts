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

    @Get('/getServFunc/:id')
    async listaServicosPorFuncionario(
      @Param('id') funcionarioId: string) {
      const servicosPorFuncionario = await this.servicoService.listaServicosPorFuncionario(funcionarioId);

      return servicosPorFuncionario;
    }

    @Get('/:id')
    async getServico(
      @Param('id') id: string,
    ){
      const servico = await this.servicoService.getServico(id);

      return servico;
    }
}
