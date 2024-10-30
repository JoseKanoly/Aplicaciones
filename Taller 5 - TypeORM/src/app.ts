import express from 'express';
import { AppDataSource } from './database';
import guiaRoutes from './routes/guiaRoutes';

const app = express();
app.use(express.json());

app.use('/api', guiaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});