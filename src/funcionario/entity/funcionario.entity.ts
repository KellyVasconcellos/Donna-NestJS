import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('funcionario')
export class FuncionarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;
}
