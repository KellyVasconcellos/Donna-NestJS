import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FuncionarioDto } from '../dto/funcionario.dto';
import { FuncionarioEntity } from '../entity/funcionario.entity';

@Injectable()
export class FuncionarioService {

    constructor(
        @InjectRepository(FuncionarioEntity)
        private userRepository: Repository<FuncionarioEntity>
      ){}
      
      create(user: FuncionarioDto): Promise<FuncionarioDto> { 
        return this.userRepository.save(user);
      }
    
      findAll(): Promise<FuncionarioDto[]> {
        return this.userRepository.find();;
      }
      
}
