import { Module } from '@nestjs/common';
import { FuncionarioController } from './controller/funcionario.controller';
import { FuncionarioService } from './service/funcionario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionarioEntity } from './entity/funcionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FuncionarioEntity])],
  providers: [FuncionarioService],
  controllers: [FuncionarioController]
})
export class FuncionarioModule {}
