import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgendamentoEntity } from '../entity/agendamento.entity';
import { AgendamentoDto } from '../dto/agendamento.dto';

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
}
