import { Router } from 'express';
import {
  getGuias,
  getGuia,
  createGuia,
  updateGuia,
  deleteGuia,
} from '../controllers/guiaController';

const router = Router();

router.get('/', getGuias);
router.get('/:id', getGuia);
router.post('/', createGuia);
router.patch('/:id', updateGuia);
router.delete('/:id', deleteGuia);

export default router;
