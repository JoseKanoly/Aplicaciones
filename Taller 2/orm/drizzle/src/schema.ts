import { pgTable, serial, text, integer, date, time } from "drizzle-orm/pg-core";

export const canales = pgTable('Canal', {
  id: serial('id').primaryKey(),
  nombre: text('nombre').notNull(),
});

export const programas = pgTable('Programa', {
  id: serial('id').primaryKey(),
  nombre: text('nombre').notNull(),
  categoria: text('categoria').notNull(),
  tipo: text('tipo').notNull(), // Si necesitas un tipo específico para el programa
});

export const guias = pgTable('Guia', {
  id: serial('id').primaryKey(),
  canalId: integer('canalId').notNull().references(() => canales.id),
  programaId: integer('programaId').notNull().references(() => programas.id),
  fecha: date('fecha').notNull(),
  horaTransmision: time('horaTransmision').notNull(),
  rating: integer('rating').notNull(), // Cambia esto según el rango de rating que desees
});
