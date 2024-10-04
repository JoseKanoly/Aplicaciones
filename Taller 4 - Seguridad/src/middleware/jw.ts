import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

interface CustomRequest extends Request {
    user?: any;
}

const prisma = new PrismaClient();
const secretKey = process.env.SECRET_KEY || ''; 

export const jwtMiddleware = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Acceso denegado. No se proporcionó token' });
        return;
    }

    try {
        const decoded: any = jwt.verify(token, secretKey);
        const usuario = await prisma.usuario.findUnique({ where: { id: decoded.id } });

        if (!usuario || usuario.estado !== 'Activo') {
            res.status(403).json({ message: 'Token rechazado. Usuario inactivo' });
            return; 
        }

        req.user = decoded;
        next(); // Llamar a next() si todo es correcto
    } catch (error) {
        res.status(400).json({ message: 'Token inválido' });
        return; 
    }
};
