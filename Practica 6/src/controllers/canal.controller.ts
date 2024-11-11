import { Request, Response } from "express";
import { CanalService } from "../services/canal.service";

const canalService = new CanalService();

export const getAllCanales = async (req: Request, res: Response) => {
    const canales = await canalService.getAll();
    res.json(canales);
};

export const createCanal = async (req: Request, res: Response) => {
    const canal = await canalService.create(req.body);
    res.json(canal);
};

export const updateCanal = async (req: Request, res: Response) => {
    const canal = await canalService.update(Number(req.params.id), req.body);
    res.json(canal);
};

export const deleteCanal = async (req: Request, res: Response) => {
    const canal = await canalService.delete(Number(req.params.id));
    res.json(canal);
};
