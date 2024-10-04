import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/usuarioController';

const router = Router();

router.post('/register', async (req, res) => {
  await registerUser(req, res);
});

router.post('/login', async (req, res) => {
  await loginUser(req, res);
});

export default router;