import { Body, Controller, Get, Post } from '@nestjs/common';
import { AgendamentoService } from '../service/agendamento.service';
import { AgendamentoDto } from '../dto/agendamento.dto';


@Controller('/api/v1/donna/agendamento')
export class AgendamentoController {

    constructor(private agendamentoService: AgendamentoService){}

    @Post()
    async salvarAgendamento(@Body() agendamento: AgendamentoDto ){
      const agendamentoCadastrado = await this.agendamentoService.salvarAgendamento(
        agendamento,
      );
  
      return {
        mensagem: 'Agendamento realizado com sucesso.',
        agendamento: agendamentoCadastrado,
      };
    }
}
