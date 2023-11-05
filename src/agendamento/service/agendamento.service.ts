import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgendamentoEntity } from '../entity/agendamento.entity';
import { AgendamentoDto } from '../dto/agendamento.dto';
import { EditarAgendamentoDto } from '../dto/editar.dto';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(AgendamentoEntity)
    private readonly agendamentoRepository: Repository<AgendamentoEntity>,
  ) {}

  async salvarAgendamento(agendamento: AgendamentoDto) {
    const agendamentoEntity = new AgendamentoEntity();

    Object.assign(agendamentoEntity, agendamento as AgendamentoEntity);

    return this.agendamentoRepository.save(agendamentoEntity);
  }

  async editarAgendamento(editarAgendamento: EditarAgendamentoDto) {
    const id = editarAgendamento.id;
    const agendamento = await this.agendamentoRepository.findOneBy({id});

    if (agendamento === null) {
      throw new NotFoundException('O agendamento não foi encontrado.');
    } 

    const agendamentoEntity = new AgendamentoEntity();

    Object.assign(agendamentoEntity, agendamento as AgendamentoEntity);
    agendamentoEntity.data = editarAgendamento.data;

    return this.agendamentoRepository.save(agendamentoEntity);
  }

  async listaAgendamento(id:string) {
        
    const listaAgendamento = await this.agendamentoRepository.query(`
    SELECT * FROM public.agendamento WHERE id_funcionario = '${id}'
    `);
    
    return listaAgendamento;
  }

}
