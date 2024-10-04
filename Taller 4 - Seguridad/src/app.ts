import express from 'express';
import canalRoutes from './routes/canalRoutes';
import programaRoutes from './routes/programaRoutes';
import guiaRoutes from './routes/guiaRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import { jwtMiddleware } from './middleware/jw';

const app = express();
app.use(express.json());

app.use('/api/canales', jwtMiddleware, canalRoutes);
app.use('/api/programas',jwtMiddleware, programaRoutes);
app.use('/api/guias', jwtMiddleware, guiaRoutes); 

app.use('/usuarios', usuarioRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor http://localhost:${PORT}`);
});

export default app; //pruebas
