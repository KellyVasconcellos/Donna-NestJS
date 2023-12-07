import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
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

    @Put('/editar')
    async editarAgendamento(@Body() editarAgendamento: EditarAgendamentoDto ){
      const agendamentoCadastrado = await this.agendamentoService.editarAgendamento(editarAgendamento);
  
      return {
        mensagem: 'Agendamento realizado com sucesso.',
        editarAgendamento: agendamentoCadastrado,
      };
    }

    @Delete('/:id')
    async deletarAgendamento(
      @Param('id') id: string,
    ){
      await this.agendamentoService.deletarAgendamento(id);
      return {
        mensagem: 'Agendamento deletado com sucesso.',
      };
    }


}

