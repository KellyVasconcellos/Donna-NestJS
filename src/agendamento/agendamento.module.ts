import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamentoController } from './controller/agendamento.controller';
import { AgendamentoEntity } from './entity/agendamento.entity';
import { AgendamentoService } from './service/agendamento.service';


@Module({
  imports: [TypeOrmModule.forFeature([AgendamentoEntity])],
  providers: [AgendamentoService],
  controllers: [AgendamentoController]
})
export class AgendamentoModule {}
