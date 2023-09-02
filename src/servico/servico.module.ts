import { Module } from '@nestjs/common';
import { ServicoController } from './controller/servico.controller';
import { ServicoService } from './service/servico.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicoEntity } from './entity/servico.entity';
import { FuncionarioEntity } from 'src/funcionario/entity/funcionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServicoEntity, FuncionarioEntity])],
  providers: [ServicoService],
  controllers: [ServicoController]
})
export class ServicoModule {}
