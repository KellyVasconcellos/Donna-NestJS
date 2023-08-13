import { IsNumber, IsString } from "class-validator";

export class FuncionarioDto {

    @IsNumber()
    id: number;
  
    @IsString()
    name: string;
  
    @IsString()
    lastName: string;  
}
