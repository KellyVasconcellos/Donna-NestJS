import { Funcionario } from './funcionario.dto';

describe('Funcionario', () => {
  it('should be defined', () => {
    expect(new Funcionario()).toBeDefined();
  });
});
