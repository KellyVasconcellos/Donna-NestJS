import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicoDto } from '../dto/servico.dto';
import { ServicoEntity } from '../entity/servico.entity';

@Injectable()
export class ServicoService {
    constructor(
        @InjectRepository(ServicoEntity)
        private readonly servicoRepository: Repository<ServicoEntity>
      ){}
    
      async listaServicos() {
        
        const listaTodosServicos = await this.servicoRepository.query(`
          SELECT * FROM (
            SELECT DISTINCT ON (titulo) *
            FROM public.servico 
          ) t
          ORDER BY ordem ASC
        `);
        
        return listaTodosServicos.map(
          (servico) => new ServicoDto(servico.id, servico.titulo, servico.descricao, servico.especifica_preco, servico.preco, servico.ordem),
        );
      }
      
}
