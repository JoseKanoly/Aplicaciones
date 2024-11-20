import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GuiaService {
    async getAll() {
        return prisma.guia.findMany({ include: { canal: true, programa: true } });
    }

    async create(data: { canalId: number; programaId: number; fecha: Date; hora: string; rating: number }) {
        return prisma.guia.create({ data });
    }

    async update(id: number, data: { fecha: Date; hora: string; rating: number }) {
        return prisma.guia.update({ where: { id }, data });
    }

    async delete(id: number) {
        return prisma.guia.delete({ where: { id } });
    }
}
