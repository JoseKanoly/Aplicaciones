import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProgramaService {
    async getAll() {
        return prisma.programa.findMany();
    }

    async create(data: { nombre: string; categoria: string; tipo: string }) {
        return prisma.programa.create({ data });
    }

    async update(id: number, data: { nombre: string; categoria: string; tipo: string }) {
        return prisma.programa.update({ where: { id }, data });
    }

    async delete(id: number) {
        return prisma.programa.delete({ where: { id } });
    }
}
