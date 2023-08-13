import { FuncionarioDto } from './funcionario.dto';

describe('Funcionario', () => {
  it('should be defined', () => {
    expect(new FuncionarioDto()).toBeDefined();
  });
});
