import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ProgramService, PrismaService],
  exports: [ProgramService],
})
export class ProgramModule {}
