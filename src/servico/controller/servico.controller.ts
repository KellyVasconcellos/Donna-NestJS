import { Controller, Get } from '@nestjs/common';
import { ServicoService } from '../service/servico.service';

@Controller('/servico')
export class ServicoController {

    constructor(private servicoService: ServicoService){}
  
    @Get()
    async listaservicos(){
      const servicos = await this.servicoService.listaServicos();

      return servicos;
    }
}
