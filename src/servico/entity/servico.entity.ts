import { FuncionarioEntity } from '../../funcionario/entity/funcionario.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name:'servico'})
export class ServicoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'titulo', length: 100, nullable: false })
  titulo: string;

  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;

  @Column({ name: 'especifica_preco', length: 50, nullable: false })
  especifica_preco: string;

  @Column({ name: 'preco', length: 50, nullable: false })
  preco: string;

  @Column({ name: 'ordem', nullable: false })
  ordem: number;

  @ManyToOne(() => FuncionarioEntity, (funcionario) => funcionario.servicos)
  funcionario: FuncionarioEntity;
}
