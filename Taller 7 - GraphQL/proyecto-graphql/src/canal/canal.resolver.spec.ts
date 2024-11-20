import { Test, TestingModule } from '@nestjs/testing';
import { CanalResolver } from './canal.resolver';

describe('CanalResolver', () => {
  let resolver: CanalResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanalResolver],
    }).compile();

    resolver = module.get<CanalResolver>(CanalResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
