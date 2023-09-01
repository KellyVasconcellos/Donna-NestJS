import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFuncionario1693534304379 implements MigrationInterface {
    name = 'CreateFuncionario1693534304379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "funcionario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "foto" character varying(100) NOT NULL, "nome" character varying(100) NOT NULL, "especialidade" character varying(255) NOT NULL, CONSTRAINT "PK_2c5d0c275b4f652fd5cb381655f" PRIMARY KEY ("id"))`);

        await queryRunner.query(`COMMIT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "funcionario"`);
    }

}
