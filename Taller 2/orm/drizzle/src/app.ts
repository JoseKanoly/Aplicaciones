import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import { canales, programas, guias } from './schema';
import * as dotenv from 'dotenv';

dotenv.config();

// Cargar variable de entorno para la conexión
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL no se encontró!');
}

const sql = neon(databaseUrl);
const db = drizzle(sql);

async function main() {
  try {
    // Modificar un canal existente
    const canalModificado = await db.update(canales)
      .set({ nombre: "Canal Modificado" })
      .where(eq(canales.id, 1)) // ID del canal a modificar
      .returning();
    // Validación
    if (canalModificado.length > 0) {
      console.log("Canal modificado:", canalModificado[0]);
    } else {
      console.log("No se encontró el canal para modificar o no hubo cambios.");
    }

    // Eliminar un canal y sus guías asociadas
    const canalId = 2; // ID del canal a eliminar
    await db.delete(guias)
      .where(eq(guias.canalId, canalId));
    const canalEliminado = await db.delete(canales)
      .where(eq(canales.id, canalId))
      .returning();
    // Validación
    if (canalEliminado.length > 0) {
      console.log("Canal eliminado:", canalEliminado[0]);
    } else {
      console.log("No se encontró el canal para eliminar.");
    }

    // Modificar un programa existente
    const programaModificado = await db.update(programas)
      .set({ nombre: "Programa Modificado", categoria: "Drama", tipo: "Serie" })
      .where(eq(programas.id, 3)) // ID del programa a modificar
      .returning();
    // Validación
    if (programaModificado.length > 0) {
      console.log("Programa modificado:", programaModificado[0]);
    } else {
      console.log("No se encontró el programa para modificar o no hubo cambios.");
    }

    // Eliminar un programa y sus guías asociadas
    const programaId = 4; // ID del programa a eliminar
    await db.delete(guias)
      .where(eq(guias.programaId, programaId));
    const programaEliminado = await db.delete(programas)
      .where(eq(programas.id, programaId))
      .returning();
    // Validación
    if (programaEliminado.length > 0) {
      console.log("Programa eliminado:", programaEliminado[0]);
    } else {
      console.log("No se encontró el programa para eliminar.");
    }

    // Modificar una guía existente
    const guiaId = 1; // ID de la guía a modificar
    const fecha = new Date('2024-09-21'); // Tu fecha
    const horaTransmision = new Date('2024-09-21T20:00:00'); // Hora de transmisión

    const guiaModificada = await db.update(guias)
      .set({
        fecha: fecha.toISOString(), // Convierte a string ISO
        horaTransmision: horaTransmision.toISOString(), // Asigna la hora correcta
        rating: 5
      })
      .where(eq(guias.id, guiaId)) // ID de la guía a modificar
      .returning();
    // Validación
    if (guiaModificada.length > 0) {
      console.log("Guía modificada:", guiaModificada[0]);
    } else {
      console.log("No se encontró la guía para modificar o no hubo cambios.");
    }

    // Eliminar una guía
    const guiaEliminada = await db.delete(guias)
      .where(eq(guias.id, 6)) // ID de la guía a eliminar
      .returning();
    // Validación
    if (guiaEliminada.length > 0) {
      console.log("Guía eliminada:", guiaEliminada[0]);
    } else {
      console.log("No se encontró la guía para eliminar.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
