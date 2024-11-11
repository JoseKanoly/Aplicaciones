# Guía de Televisión API

Este proyecto es una API RESTful construida con **Node.js**, **Express.js**, y **Prisma ORM** para gestionar canales, programas y guías de televisión.

## Tecnologías Utilizadas

- **Node.js** y **Express.js**: Para crear la API.
- **Prisma ORM**: Para interactuar con la base de datos.
- **PostgreSQL**: Base de datos relacional.
- **TypeScript**: Para añadir tipado estático.
- **CORS**: Para permitir solicitudes de diferentes dominios.

## Requisitos Previos

- **Node.js**: Asegúrate de tener **Node.js** instalado. [Descargar](https://nodejs.org/)
- **PostgreSQL**: Una base de datos PostgreSQL local o en la nube.
- **Postman**: Herramienta recomendada para probar la API. [Descargar](https://www.postman.com/)

## Pasos para Levantar el Proyecto

### 1. Clona el repositorio:
https://github.com/JoseKanoly/Aplicaciones  [Practica6]

### 2. instalar dependencias
npm install

### 3. Configura la base de datos:
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_de_base_de_datos?schema=public"

### 4. Ejecuta las misgraciones de Prisma:
npx prisma migrate dev --name init

### 5.Inicia el servidor:
npx ts-node src/app.ts

