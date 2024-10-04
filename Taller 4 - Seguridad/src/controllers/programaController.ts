import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProgramas = async (req: Request, res: Response) => {
  const programas = await prisma.programa.findMany();
  res.json(programas);
};

export const getPrograma = async (req: Request, res: Response) => {
  const { id } = req.params;
  const programa = await prisma.programa.findUnique({ where: { id: Number(id) } });
  res.json(programa);
};

export const createPrograma = async (req: Request, res: Response) => {
  const { nombre, categoria, tipo } = req.body;
  const nuevoPrograma = await prisma.programa.create({ data: { nombre, categoria, tipo } });
  res.json(nuevoPrograma);
};

export const updatePrograma = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, categoria, tipo } = req.body;
  const programaActualizado = await prisma.programa.update({
    where: { id: Number(id) },
    data: { nombre, categoria, tipo },
  });
  res.json(programaActualizado);
};

export const deletePrograma = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.programa.delete({ where: { id: Number(id) } });
  res.json({ message: 'Programa eliminado' });
};
