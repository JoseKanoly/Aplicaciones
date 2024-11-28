import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProgramService {
  constructor(private prisma: PrismaService) {}

  async createProgram(name: string, category: string, type: string) {
    return this.prisma.program.create({
      data: { name, category, type },
    });
  }

  async getAllPrograms() {
    return this.prisma.program.findMany();
  }
}
