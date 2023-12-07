import { IsNotEmpty, IsString } from "class-validator";

export class EditarAgendamentoDto {

    @IsString()
    @IsNotEmpty({ message: 'Id do agendamento não pode ser vazio' })
    id: string;

    @IsString()
    @IsNotEmpty({ message: 'Data do agendamento não pode ser vazio' })
    data: string;
}
