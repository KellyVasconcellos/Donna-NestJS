import { Test, TestingModule } from '@nestjs/testing';
import { FuncionarioController } from './funcionario.controller';

describe('FuncionarioController', () => {
  let controller: FuncionarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuncionarioController],
    }).compile();

    controller = module.get<FuncionarioController>(FuncionarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
