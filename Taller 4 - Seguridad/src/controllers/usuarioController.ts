import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secretKey = 'kanoly'; 

export const registerUser = async (req: Request, res: Response) => {
  const { nombre, clave } = req.body;

  if (!nombre || !clave) {
    return res.status(400).json({ message: 'Nombre y clave son requeridos.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(clave, 10);
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        clave: hashedPassword,
        estado: 'Activo', // Por defecto
      },
    });

    return res.status(201).json(nuevoUsuario);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear usuario', error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { nombre, clave } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { nombre } });
    if (!usuario) {
      return res.status(401).json({ message: 'usuario inválidas.' });
    }

    const validPassword = await bcrypt.compare(clave, usuario.clave);
    if (!validPassword) {
      return res.status(401).json({ message: 'clave inválidas.' });
    }

    const token = jwt.sign({ id: usuario.id, nombre: usuario.nombre }, secretKey, { expiresIn: '5m' });
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};