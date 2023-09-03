import { ServicoDto } from "./servico.dto";

export class ServicoFuncDto {

    constructor(
        readonly id_funcionario:string, 
        readonly servicos : Array<ServicoDto>
    ){}
}