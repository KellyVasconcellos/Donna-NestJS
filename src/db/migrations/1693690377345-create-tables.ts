import { MigrationInterface, QueryRunner } from "typeorm";
import { v4 as uuid } from 'uuid';
import { FuncionarioEntity } from '../../funcionario/entity/funcionario.entity';
import { ServicoEntity } from '../../servico/entity/servico.entity';

export class CreateTables1693690377345 implements MigrationInterface {
    name = 'CreateTables1693690377345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "funcionario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "foto" character varying(100) NOT NULL, "nome" character varying(100) NOT NULL, "especialidade" character varying(255) NOT NULL, CONSTRAINT "PK_2c5d0c275b4f652fd5cb381655f" PRIMARY KEY ("id"))`);
        
        await queryRunner.query(`CREATE TABLE "servico" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying(100) NOT NULL, "descricao" character varying(255) NOT NULL, "especifica_preco" character varying(50) NOT NULL, "preco" character varying(50) NOT NULL, "ordem" integer NOT NULL, "funcionarioId" uuid, CONSTRAINT "PK_289d0aa6d49f9d0fd65aefc6677" PRIMARY KEY ("id"))`);
        
        await queryRunner.query(`ALTER TABLE "servico" ADD CONSTRAINT "FK_db02de8f45304e488cd87c8b754" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);

        await queryRunner.query(`COMMIT`);

        const funcionarioRepo =
          queryRunner.connection.getRepository(FuncionarioEntity);
        await funcionarioRepo.insert([
          {
            id: uuid(),
            foto: 'clarice.png',
            nome: 'Clarice Campos',
            especialidade: 'Cabeleireira Especialista em Visagismo e Coloração',
          },
          {
            id: uuid(),
            foto: 'teresa.png',
            nome: 'Teresa Maria',
            especialidade: 'Cabeleireira Especialista em Terapia Capilar',
          },
          {
            id: uuid(),
            foto: 'serena.png',
            nome: 'Serena Souza',
            especialidade: 'Hair Stylist e Sobrancelha',
          },
          {
            id: uuid(),
            foto: 'olivia.png',
            nome: 'Olivia Maldonato',
            especialidade: 'Maquiadora',
          },
          {
            id: uuid(),
            foto: 'madalena.png',
            nome: 'Madalena Silva',
            especialidade: 'Manicure e Podóloga',
          },
        ]);
    
        await queryRunner.query(`COMMIT`);
    
        const servicoRepo = queryRunner.connection.getRepository(ServicoEntity);
        await servicoRepo.insert([
          {
            id: uuid(),
            titulo: 'Avaliação de Imagem',
            descricao:
              'Consultoria para indicar o visual mais apropriado para a imagem que a cliente quer transmitir, o serviço inclui corte, finalização e coloração (caso necessário).',
            especifica_preco: 'A partir de',
            preco: '1200.00',
            ordem: 1,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Clarice Campos' }
            })
          },
          {
            id: uuid(),
            titulo: 'Avaliação de Cor',
            descricao:
              'Consultoria para escolher o melhor procedimento de pintura de acordo com a estrutura capilar. É realizado teste de mecha para verificar a resistência dos fios e cor adequada.',
            especifica_preco: '',
            preco: '90.00',
            ordem: 2,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Clarice Campos' }
            })
          },
          {
            id: uuid(),
            titulo: 'Coloração',
            descricao: 'Tingimento total do cabelo.',
            especifica_preco: '',
            preco: '500.00',
            ordem: 3,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Clarice Campos' }
            })
          },
          {
            id: uuid(),
            titulo: 'Mechas Ombré',
            descricao: 'Clareamento do cabelo por mechas, luzes e ombré.',
            especifica_preco: '',
            preco: '650.00',
            ordem: 4,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Clarice Campos' }
            })
          },
          {
            id: uuid(),
            titulo: 'Corte',
            descricao: 'Corte, lavagem e finalização com escova.',
            especifica_preco: '',
            preco: '200.00',
            ordem: 5,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Clarice Campos' }
            })
          },
    
          {
            id: uuid(),
            titulo: 'Corte',
            descricao: 'Corte, lavagem e finalização com escova.',
            especifica_preco: '',
            preco: '200.00',
            ordem: 5,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Teresa Maria' }
            })
          },
          {
            id: uuid(),
            titulo: 'Corte a seco',
            descricao:
              'Corte a seco, após o procedimento é realizado lavagem e finalização com o cabelo natural.',
            especifica_preco: '',
            preco: '200.00',
            ordem: 6,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Teresa Maria' }
            })
          },
          {
            id: uuid(),
            titulo: 'Hidratação',
            descricao:
              'Higienização, tratamento e finalização com produtos específicos para cada tipo de cabelo.',
            especifica_preco: '',
            preco: '400.00',
            ordem: 7,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Teresa Maria' }
            })
          },
          {
            id: uuid(),
            titulo: 'Penteado',
            descricao: 'Estar com o cabelo limpo e sem produto de finalização.',
            especifica_preco: '',
            preco: '350.00',
            ordem: 8,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Teresa Maria' }
            })
          },
    
          {
            id: uuid(),
            titulo: 'Avaliação de Imagem',
            descricao:
              'Consultoria para indicar o visual mais apropriado para a imagem que a cliente quer transmitir, o serviço inclui corte, finalização e coloração (caso necessário).',
            especifica_preco: 'A partir de',
            preco: '1200.00',
            ordem: 1,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Serena Souza' }
            })
          },
          {
            id: uuid(),
            titulo: 'Corte',
            descricao: 'Corte, lavagem e finalização com escova.',
            especifica_preco: '',
            preco: '200.00',
            ordem: 5,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Serena Souza' }
            })
          },
          {
            id: uuid(),
            titulo: 'Corte a seco',
            descricao:
              'Corte a seco, após o procedimento é realizado lavagem e finalização com o cabelo natural.',
            especifica_preco: '',
            preco: '200.00',
            ordem: 6,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Serena Souza' }
            })
          },
          {
            id: uuid(),
            titulo: 'Modelagem de sobrancelha',
            descricao: 'Procedimento tradicional, remoção e desenho dos pêlos.',
            especifica_preco: '',
            preco: '95.00',
            ordem: 9,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Serena Souza' }
            })
          },
          {
            id: uuid(),
            titulo: 'Brow lamination',
            descricao:
              'Técnica de alisamento e alinhamento, que deixa os fios com a impressão de estarem mais volumosos.',
            especifica_preco: '',
            preco: '280.00',
            ordem: 10,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Serena Souza' }
            })
          },
    
          {
            id: uuid(),
            titulo: 'Maquiagem Social',
            descricao: 'Maquiagem manual feita com pincel e esponja, neste procedimento é realizado o preparo da pele antes de receber a maquiagem(hidratação).',
            especifica_preco: '',
            preco: '350.00',
            ordem: 11,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Olivia Maldonato' }
            })
          },
          {
            id: uuid(),
            titulo: 'Maquiagem Airbrush',
            descricao:
              'Maquiagem com aerógrafo, este procedimento visa durabilidade e resulta um efeito mais pesado, ideal para casamentos, formaturas e eventos.',
            especifica_preco: '',
            preco: '650.00',
            ordem: 12,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Olivia Maldonato' }
            })
          },
    
          {
            id: uuid(),
            titulo: 'Esmaltação tradicional',
            descricao: 'Pintura simples das unhas da Mão e do pé.',
            especifica_preco: '',
            preco: '60.00',
            ordem: 13,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Madalena Silva' }
            })
          },
          {
            id: uuid(),
            titulo: 'Alongamento de unha de gel',
            descricao: 'Extensão da unha e coloração tradicional.',
            especifica_preco: '',
            preco: '160.00',
            ordem: 14,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Madalena Silva' }
            })
          },
          {
            id: uuid(),
            titulo: 'Manutenção da unha de gel',
            descricao: 'Neste processo inclui coloração tradicional.',
            especifica_preco: '',
            preco: '85.00',
            ordem: 15,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Madalena Silva' }
            })
          },
          {
            id: uuid(),
            titulo: 'Blindagem',
            descricao:
              'Película protetora de gel para reforçar as unhas, evitando quebras e lesões, inclui coloração tradicional.',
            especifica_preco: '',
            preco: '120.00',
            ordem: 16,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Madalena Silva' },
            })
          },
          {
            id: uuid(),
            titulo: 'Podologia',
            descricao: 'Remoção de unhas encravadas (para demais tratamentos entrar em contato).',
            especifica_preco: '',
            preco: '120.00',
            ordem: 17,
            funcionario: await funcionarioRepo.findOne({
              where: { nome: 'Madalena Silva' },
            })
          },
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "servico" DROP CONSTRAINT "FK_db02de8f45304e488cd87c8b754"`);
        await queryRunner.query(`DROP TABLE "servico"`);
        await queryRunner.query(`DROP TABLE "funcionario"`);
    }

}
