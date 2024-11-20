import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CanalService {
  async getAll() {
    return prisma.canal.findMany();
  }

  async create(data: { nombre: string }) {
    return prisma.canal.create({ data });
  }

  async update(id: number, data: { nombre: string }) {
    return prisma.canal.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.canal.delete({ where: { id } });
  }
}
