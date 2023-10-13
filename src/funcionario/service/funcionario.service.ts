import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FuncionarioDto } from '../dto/funcionario.dto';
import { FuncionarioEntity } from '../entity/funcionario.entity';

@Injectable()
export class FuncionarioService {
    constructor(
        @InjectRepository(FuncionarioEntity)
        private readonly funcionarioRepository: Repository<FuncionarioEntity>
      ){}
    
      async listaFuncionarios() {
        const funcionarios = await this.funcionarioRepository.find();
        return funcionarios.map(
          (funcionario) => new FuncionarioDto(funcionario.id, funcionario.foto, funcionario.nome, funcionario.especialidade),
        );
      }

      async getFuncionario(id:string){
        const funcionario = await this.funcionarioRepository.findOneBy({ id });
        return funcionario
      }
      
}
