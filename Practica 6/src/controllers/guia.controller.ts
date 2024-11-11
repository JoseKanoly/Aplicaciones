import { Request, Response } from "express";
import { GuiaService } from "../services/guia.service";

const guiaService = new GuiaService();

export const getAllGuias = async (req: Request, res: Response) => {
    const guias = await guiaService.getAll();
    res.json(guias);
};

export const createGuia = async (req: Request, res: Response) => {
    const guia = await guiaService.create(req.body);
    res.json(guia);
};

export const updateGuia = async (req: Request, res: Response) => {
    const guia = await guiaService.update(Number(req.params.id), req.body);
    res.json(guia);
};

export const deleteGuia = async (req: Request, res: Response) => {
    const guia = await guiaService.delete(Number(req.params.id));
    res.json(guia);
};
