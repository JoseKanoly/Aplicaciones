// src/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear canales
  const channel1 = await prisma.channel.create({
    data: {
      name: 'Canal 1',
      description: 'Canal de noticias',
    },
  });

  const channel2 = await prisma.channel.create({
    data: {
      name: 'Canal 2',
      description: 'Canal de entretenimiento',
    },
  });

  console.log('Canales creados:', { channel1, channel2 });

  // Crear programas
  const program1 = await prisma.program.create({
    data: {
      name: 'Noticias del día',
      category: 'Noticias',
      type: 'Informativo',
    },
  });

  const program2 = await prisma.program.create({
    data: {
      name: 'Cine de la noche',
      category: 'Entretenimiento',
      type: 'Película',
    },
  });

  console.log('Programas creados:', { program1, program2 });

  // Crear transacciones (relacionando canales y programas)
  const transaction1 = await prisma.transaction.create({
    data: {
      channelId: channel1.id,
      programId: program1.id,
      date: '2024-11-27',
      time: '18:00',
      rating: 5,
    },
  });

  const transaction2 = await prisma.transaction.create({
    data: {
      channelId: channel2.id,
      programId: program2.id,
      date: '2024-11-27',
      time: '20:00',
      rating: 4,
    },
  });

  console.log('Transacciones creadas:', { transaction1, transaction2 });
}

// Llamar a la función principal
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
