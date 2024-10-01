import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Funciones para Canal
async function crearCanal(nombre: string) {
  return prisma.canal.create({
    data: {
      nombre,
    },
  });
}

async function consultarCanales() {
  return prisma.canal.findMany();
}

// Funciones para Programa
async function crearPrograma(nombre: string, categoria: string, tipo: string) {
  return prisma.programa.create({
    data: {
      nombre,
      categoria,
      tipo,
    },
  });
}

async function consultarProgramas() {
  return prisma.programa.findMany();
}

// Funciones para Guia
async function crearGuia(canalId: number, programaId: number, fecha: Date, hora: Date, escalaRating?: string) {
  return prisma.guia.create({
    data: {
      canalId,
      programaId,
      fecha,
      hora,
      escalaRating,
    },
  });
}

async function consultarGuias() {
  return prisma.guia.findMany({
    include: {
      canal: true,
      programa: true,
    },
  });
}

// Función asíncrona para crear y mostrar canales, programas y guías
async function main() {
  try {
    // Creación de canales y programas
    const nuevoCanal = await crearCanal('Canal 2');
    const nuevoPrograma = await crearPrograma('Programa B', 'Categoría 2', 'Tipo 2');

    // Creación de guía
    const nuevaGuia = await crearGuia(nuevoCanal.id, nuevoPrograma.id, new Date('2024-09-10'), new Date('2024-09-10T20:00:00'), '4 estrellas');

    // Mostrar los registros creados
    console.log('Nuevo canal creado:', nuevoCanal);
    console.log('Nuevo programa creado:', nuevoPrograma);
    console.log('Nueva guía creada:', nuevaGuia);

    // Mostrar todos los registros existentes
    const canales = await consultarCanales();
    console.log('Todos los canales:', canales);

    const programas = await consultarProgramas();
    console.log('Todos los programas:', programas);

    const guias = await consultarGuias();
    console.log('Todas las guías:', guias);

  } catch (err) {
    console.error(err);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
