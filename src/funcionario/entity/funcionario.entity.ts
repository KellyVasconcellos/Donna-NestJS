import { ServicoEntity } from '../../servico/entity/servico.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name:'funcionario'})
export class FuncionarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'foto', length: 100, nullable: false })
  foto: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'especialidade', length: 255, nullable: false })
  especialidade: string;

  @OneToMany(() => ServicoEntity, (servico) => servico.funcionario)
  servicos: ServicoEntity[];
}
