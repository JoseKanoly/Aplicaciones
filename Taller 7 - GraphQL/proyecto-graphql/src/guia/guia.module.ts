import { Module } from '@nestjs/common';
import { GuiaService } from './guia.service';
import { GuiaResolver } from './guia.resolver';

@Module({
  providers: [GuiaService, GuiaResolver],
})
export class GuiaModule {}
