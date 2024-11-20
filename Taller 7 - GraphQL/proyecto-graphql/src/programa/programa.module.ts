import { Module } from '@nestjs/common';
import { ProgramaService } from './programa.service';
import { ProgramaResolver } from './programa.resolver';

@Module({
  providers: [ProgramaService, ProgramaResolver],
})
export class ProgramaModule {}
