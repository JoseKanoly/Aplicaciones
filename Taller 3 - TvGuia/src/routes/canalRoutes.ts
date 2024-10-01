import { Router } from 'express';
import {
  getCanales,
  getCanal,
  createCanal,
  updateCanal,
  deleteCanal,
} from '../controllers/canalController';

const router = Router();

router.get('/', getCanales);
router.get('/:id', getCanal);
router.post('/', createCanal);
router.patch('/:id', updateCanal);
router.delete('/:id', deleteCanal);

export default router;
