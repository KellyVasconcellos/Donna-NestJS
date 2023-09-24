import { IsNotEmpty, IsString } from "class-validator";

export class AgendamentoDto {
    @IsString()
    @IsNotEmpty({ message: 'Nome do cliente não pode ser vazio' })
    nome_cliente: string;

    @IsString()
    @IsNotEmpty({ message: 'Email do cliente não pode ser vazio' })
    email_cliente: string;

    @IsString()
    @IsNotEmpty({ message: 'Data do agendamento não pode ser vazio' })
    data: string;

    @IsString()
    @IsNotEmpty({ message: 'Id do serviço não pode ser vazio' })
    id_servico: string;

    @IsString()
    @IsNotEmpty({ message: 'Id do funcionário não pode ser vazio' })
    id_funcionario: string;
}
