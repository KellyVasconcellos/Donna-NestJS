import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAgendamento1695579350270 implements MigrationInterface {
    name = 'CreateAgendamento1695579350270'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "agendamento" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome_cliente" character varying(255) NOT NULL, "email_cliente" character varying(255) NOT NULL, "data" character varying(255) NOT NULL, "id_servico" character varying(255) NOT NULL, "id_funcionario" character varying(255) NOT NULL, CONSTRAINT "PK_a102b15cfec9ce6d8ac6193345f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "agendamento"`);
    }

}
