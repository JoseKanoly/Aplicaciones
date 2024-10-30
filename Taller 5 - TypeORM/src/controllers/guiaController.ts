import { Request, Response } from 'express';
import { GuiaRepository } from '../repositories/guiaRepository';
import { GuiaDTO } from '../dtos/guiaDto';
import { validate } from 'class-validator';
import { AppDataSource } from '../database';
import { Canal } from '../entities/canal';
import { Programa } from '../entities/programa';
import { Guia } from '../entities/guia';

const guiaRepository = new GuiaRepository();

export class GuiaController {
  async create(req: Request, res: Response): Promise<void> {  
    const guiaDTO = new GuiaDTO();
    Object.assign(guiaDTO, req.body);

    const errors = await validate(guiaDTO);
    if (errors.length > 0) {
      res.status(400).json(errors);
      return;
    }

    const canal = await AppDataSource.getRepository(Canal).findOneBy({ id: guiaDTO.canalId });
    const programa = await AppDataSource.getRepository(Programa).findOneBy({ id: guiaDTO.programaId });

    if (!canal || !programa) {
      res.status(404).json({ message: 'Canal o programa no encontrado' });
      return;
    }

    const guia = new Guia();
    guia.canal = canal;
    guia.programa = programa;
    guia.fecha = new Date(guiaDTO.fecha);
    guia.horaTransmision = guiaDTO.horaTransmision;
    guia.escalaRating = guiaDTO.escalaRating;

    const newGuia = await guiaRepository.createGuia(guia);
    res.status(201).json(newGuia);
  }

  async getAll(req: Request, res: Response): Promise<void> {  
    const guias = await guiaRepository.getAllGuias();
  
    const response = guias.map((guia) => ({
      id: guia.id,
      fecha: guia.fecha.toISOString().split('T')[0],
      horaTransmision: guia.horaTransmision,
      escalaRating: parseFloat(guia.escalaRating.toString()),
      canal: {
        id: guia.canal.id,
        nombre: guia.canal.nombre,
      },
      programa: {
        id: guia.programa.id,
        nombre: guia.programa.nombre,
        categoria: guia.programa.categoria,
        tipo: guia.programa.tipo,
      },
    }));
  
    res.json(response);
  }

  async createCanal(req: Request, res: Response): Promise<void> {
    const { nombre } = req.body;
    const canal = new Canal();
    canal.nombre = nombre;
    const newCanal = await AppDataSource.getRepository(Canal).save(canal);
    res.status(201).json(newCanal);
  }

  async createPrograma(req: Request, res: Response): Promise<void> {
    const { nombre, categoria, tipo } = req.body;
    const programa = new Programa();
    programa.nombre = nombre;
    programa.categoria = categoria;
    programa.tipo = tipo;
    const newPrograma = await AppDataSource.getRepository(Programa).save(programa);
    res.status(201).json(newPrograma);
  }
}
