import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AgendamentoService } from '../service/agendamento.service';
import { AgendamentoDto } from '../dto/agendamento.dto';
import { EditarAgendamentoDto } from '../dto/editar.dto';


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

    @Post('/editar')
    async editarAgendamento(@Body() editarAgendamento: EditarAgendamentoDto ){
      const agendamentoCadastrado = await this.agendamentoService.editarAgendamento(editarAgendamento);
  
      return {
        mensagem: 'Agendamento realizado com sucesso.',
        editarAgendamento: agendamentoCadastrado,
      };
    }

    @Get()
    async listaAgendamentos(){
  
      return await this.agendamentoService.listaAgendamento();
    }
}

