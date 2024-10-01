import { Router } from 'express';
import {
  getProgramas,
  getPrograma,
  createPrograma,
  updatePrograma,
  deletePrograma,
} from '../controllers/programaController';

const router = Router();

router.get('/', getProgramas);
router.get('/:id', getPrograma);
router.post('/', createPrograma);
router.patch('/:id', updatePrograma);
router.delete('/:id', deletePrograma);

export default router;
