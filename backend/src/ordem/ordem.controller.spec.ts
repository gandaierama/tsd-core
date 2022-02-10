import { Test, TestingModule } from '@nestjs/testing';
import { OrdemController } from './ordem.controller';
import { OrdemService } from './ordem.service';

describe('OrdemController', () => {
  let controller: OrdemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdemController],
      providers: [OrdemService],
    }).compile();

    controller = module.get<OrdemController>(OrdemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
