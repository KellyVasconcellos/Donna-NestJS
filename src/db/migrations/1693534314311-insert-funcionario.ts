import { FuncionarioEntity } from '../../funcionario/entity/funcionario.entity'
import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuid } from 'uuid';

export class InsertFuncionario1693534314311 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const funcionarioRepo = queryRunner.connection.getRepository(FuncionarioEntity);
    await funcionarioRepo.insert([
      {
        id: uuid(),
        foto: 'clarice.png',
        nome: 'Clarice Campos',
        especialidade: 'Cabeleireira Especialista em Visagismo e Coloração',
      }
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}