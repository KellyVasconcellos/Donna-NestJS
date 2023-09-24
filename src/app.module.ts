import { Module } from '@nestjs/common';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ConfigModule } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ServicoModule } from './servico/servico.module';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    FuncionarioModule,
    ServicoModule,
    AgendamentoModule
  ],
})
export class AppModule {}
