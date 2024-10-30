import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { GuiaController } from '../controllers/guiaController';

const router = Router();
const guiaController = new GuiaController();

router.post('/guias', asyncHandler((req, res) => guiaController.create(req, res)));
router.get('/guias', asyncHandler((req, res) => guiaController.getAll(req, res)));
router.post('/canales', asyncHandler((req, res) => guiaController.createCanal(req, res)));
router.post('/programas', asyncHandler((req, res) => guiaController.createPrograma(req, res)));

export default router;