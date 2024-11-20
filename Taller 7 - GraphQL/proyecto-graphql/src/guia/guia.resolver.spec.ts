import { Test, TestingModule } from '@nestjs/testing';
import { GuiaResolver } from './guia.resolver';

describe('GuiaResolver', () => {
  let resolver: GuiaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuiaResolver],
    }).compile();

    resolver = module.get<GuiaResolver>(GuiaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
