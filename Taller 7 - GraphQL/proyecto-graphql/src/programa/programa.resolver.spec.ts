import { Test, TestingModule } from '@nestjs/testing';
import { ProgramaResolver } from './programa.resolver';

describe('ProgramaResolver', () => {
  let resolver: ProgramaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramaResolver],
    }).compile();

    resolver = module.get<ProgramaResolver>(ProgramaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
