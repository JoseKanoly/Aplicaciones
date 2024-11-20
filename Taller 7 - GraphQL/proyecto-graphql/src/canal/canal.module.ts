import { Module } from '@nestjs/common';
import { CanalService } from './canal.service';
import { CanalResolver } from './canal.resolver';

@Module({
  providers: [CanalService, CanalResolver],
})
export class CanalModule {}
