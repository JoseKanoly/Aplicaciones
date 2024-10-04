import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getGuias = async (req: Request, res: Response) => {
  const guias = await prisma.guia.findMany({
    include: {
      canal: true,
      programa: true,
    },
  });
  res.json(guias);
};

export const getGuia = async (req: Request, res: Response) => {
  const { id } = req.params;
  const guia = await prisma.guia.findUnique({
    where: { id: Number(id) },
    include: {
      canal: true,
      programa: true,
    },
  });
  res.json(guia);
};

export const createGuia = async (req: Request, res: Response) => {
  const { canalId, programaId, fecha, horaTransmision, escalaRating } = req.body;
  const nuevaGuia = await prisma.guia.create({
    data: { canalId: Number(canalId), programaId: Number(programaId), fecha, horaTransmision, escalaRating },
  });
  res.json(nuevaGuia);
};

export const updateGuia = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { canalId, programaId, fecha, horaTransmision, escalaRating } = req.body;
  const guiaActualizada = await prisma.guia.update({
    where: { id: Number(id) },
    data: { canalId: Number(canalId), programaId: Number(programaId), fecha, horaTransmision, escalaRating },
  });
  res.json(guiaActualizada);
};

export const deleteGuia = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.guia.delete({ where: { id: Number(id) } });
  res.json({ message: 'Guía eliminada' });
};
