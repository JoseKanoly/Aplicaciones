import { DataSource } from 'typeorm';
import { Guia } from './entities/guia';
import { Canal } from './entities/canal';
import { Programa } from './entities/programa';
import * as dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: DATABASE_URL,
  entities: [Guia, Canal, Programa],
  synchronize: true, // Cambia a false en producción
});

AppDataSource.initialize()
  .then(() => {
    console.log('Base de datos conectada');
  })
  .catch((error) => console.log('Error al conectar a la base de datos', error));