import { FuncionarioEntity } from './funcionario.entity';

describe('Funcionario', () => {
  it('should be defined', () => {
    expect(new FuncionarioEntity()).toBeDefined();
  });
});
