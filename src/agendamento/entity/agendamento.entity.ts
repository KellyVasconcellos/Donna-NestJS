import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name:'agendamento'})
export class AgendamentoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome_cliente', length: 255, nullable: false })
  nome_cliente: string;

  @Column({ name: 'email_cliente', length: 255, nullable: false })
  email_cliente: string;

  @Column({ name: 'data', length: 255, nullable: false })
  data: string;

  @Column({ name: 'id_servico', length: 255, nullable: false })
  id_servico: string;

  @Column({ name: 'id_funcionario', length: 255, nullable: false })
  id_funcionario: string;
}
