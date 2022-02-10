import { Test, TestingModule } from '@nestjs/testing';
import { OrdemService } from './ordem.service';

describe('OrdemService', () => {
  let service: OrdemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdemService],
    }).compile();

    service = module.get<OrdemService>(OrdemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
