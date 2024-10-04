import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear canales
  const canal1 = await prisma.canal.create({
    data: { nombre: "Canal Uno" },
  });

  const canal2 = await prisma.canal.create({
    data: { nombre: "Canal Dos" },
  });

  const canal3 = await prisma.canal.create({
    data: { nombre: "Canal Tres" },
  });

  const canal4 = await prisma.canal.create({
    data: { nombre: "Canal Cuatro" },
  });

  // Crear programas
  const programa1 = await prisma.programa.create({
    data: {
      nombre: "Programa Uno",
      categoria: "Entretenimiento",
      tipo: "Variedades",
    },
  });

  const programa2 = await prisma.programa.create({
    data: {
      nombre: "Programa Dos",
      categoria: "Educación",
      tipo: "Documental",
    },
  });

  const programa3 = await prisma.programa.create({
    data: {
      nombre: "Programa Tres",
      categoria: "Deportes",
      tipo: "Competencia",
    },
  });

  const programa4 = await prisma.programa.create({
    data: {
      nombre: "Programa Cuatro",
      categoria: "Música",
      tipo: "Concierto",
    },
  });

  // Crear guías
  await prisma.guia.create({
    data: {
      canalId: canal1.id,
      programaId: programa1.id,
      fecha: new Date("2024-09-30"),
      horaTransmision: new Date("2024-09-30T20:00:00"),
      escalaRating: 5,
    },
  });

  await prisma.guia.create({
    data: {
      canalId: canal2.id,
      programaId: programa2.id,
      fecha: new Date("2024-09-30"),
      horaTransmision: new Date("2024-09-30T21:00:00"),
      escalaRating: 4,
    },
  });

  await prisma.guia.create({
    data: {
      canalId: canal3.id,
      programaId: programa3.id,
      fecha: new Date("2024-09-30"),
      horaTransmision: new Date("2024-09-30T22:00:00"),
      escalaRating: 3,
    },
  });

  await prisma.guia.create({
    data: {
      canalId: canal4.id,
      programaId: programa4.id,
      fecha: new Date("2024-09-30"),
      horaTransmision: new Date("2024-09-30T23:00:00"),
      escalaRating: 2,
    },
  });

  console.log("Datos ingresados correctamente");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
