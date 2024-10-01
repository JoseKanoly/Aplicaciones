import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCanales = async (req: Request, res: Response) => {
  const canales = await prisma.canal.findMany();
  res.json(canales);
};

export const getCanal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const canal = await prisma.canal.findUnique({ where: { id: Number(id) } });
  res.json(canal);
};

export const createCanal = async (req: Request, res: Response) => {
  const { nombre } = req.body;
  const nuevoCanal = await prisma.canal.create({ data: { nombre } });
  res.json(nuevoCanal);
};

export const updateCanal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre } = req.body;
  const canalActualizado = await prisma.canal.update({
    where: { id: Number(id) },
    data: { nombre },
  });
  res.json(canalActualizado);
};

export const deleteCanal = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.canal.delete({ where: { id: Number(id) } });
  res.json({ message: 'Canal eliminado' });
};
