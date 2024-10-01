import express from 'express';
import canalRoutes from './routes/canalRoutes';
import programaRoutes from './routes/programaRoutes';
import guiaRoutes from './routes/guiaRoutes';

const app = express();
app.use(express.json());

app.use('/canales', canalRoutes);
app.use('/programas', programaRoutes);
app.use('/guias', guiaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
