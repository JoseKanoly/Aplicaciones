import { Request, Response } from "express";
import { ProgramaService } from "../services/programa.service";

const programaService = new ProgramaService();

export const getAllProgramas = async (req: Request, res: Response) => {
  const programas = await programaService.getAll();
  res.json(programas);
};

export const createPrograma = async (req: Request, res: Response) => {
  const programa = await programaService.create(req.body);
  res.json(programa);
};

export const updatePrograma = async (req: Request, res: Response) => {
  const programa = await programaService.update(Number(req.params.id), req.body);
  res.json(programa);
};

export const deletePrograma = async (req: Request, res: Response) => {
  const programa = await programaService.delete(Number(req.params.id));
  res.json(programa);
};
