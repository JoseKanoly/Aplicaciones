import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  // Crear una transacción
  async createTransaction(channelId: number, programId: number, date: string, time: string, rating: number) {
    return this.prisma.transaction.create({
      data: {
        channelId,
        programId,
        date,
        time,
        rating,
      },
    });
  }

  // Obtener transacciones activas (con un filtro opcional)
  async getActiveTransactions() {
    return this.prisma.transaction.findMany({
      where: {
        rating: { gt: 3 }  // Este filtro asegura que solo se obtengan transacciones con rating > 3 (por ejemplo)
      }
    });
  }
}

