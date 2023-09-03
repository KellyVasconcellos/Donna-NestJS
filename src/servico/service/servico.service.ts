import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicoDto } from '../dto/servico.dto';
import { ServicoEntity } from '../entity/servico.entity';
import { ServicoFuncDto } from '../dto/servicofunc.dto';

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
          (servico) => new ServicoDto(servico.id, servico.titulo, servico.descricao, servico.especifica_preco, servico.preco),
        );
      }

      async listaServicosPorFuncionario(idFuncionario:string) {

        const listaServicosPorFuncionario = await this.servicoRepository.find({
          where: {
            funcionario: { id: idFuncionario },
          },
          relations: {
            funcionario: true,
          },
        });

        const response = listaServicosPorFuncionario.map(
          (servico) => {
            const servicoDtoArray = []

            const servicoDtoObjeto = new ServicoDto(servico.id, servico.titulo, servico.descricao, servico.especifica_preco, servico.preco)

            servicoDtoArray.push(servicoDtoObjeto)

            const servicoFuncDtoObjeto = new ServicoFuncDto(servico.funcionario.id, servicoDtoArray)

            return servicoFuncDtoObjeto
          } 
        );
        
        return response
      }
      
}
