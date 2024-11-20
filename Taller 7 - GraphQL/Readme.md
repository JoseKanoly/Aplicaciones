# NestJS GraphQL 
## Descripción del Proyecto
Este proyecto utiliza NestJS con GraphQL, Prisma ORM y PostgreSQL para crear una API backend robusta y escalable.

## Requisitos Previos
- Node.js (versión 16 o superior)
- npm (Node Package Manager)
- PostgreSQL instalado y configurado

## Pasos para Levantar el Proyecto

### 1. Clonar el Repositorio
```bash
git clone https://github.com/JoseKanoly/Aplicaciones/tree/c476a3108f115258bfb30f91fd3e4d4d08a8f637/Taller%207%20-%20GraphQL
cd "Taller 7 - GraphQL"
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:
```
DATABASE_URL="postgresql://<usuario>:<contraseña>@<host>:<puerto>/<nombre_base_datos>"
```
**Nota:** Reemplaza los marcadores con tus credenciales de base de datos.

### 4. Configurar Base de Datos
Inicializar y migrar la base de datos:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Ejecutar el Servidor
```bash
npm run start
```

### 6. Acceder a GraphQL Playground
Abre tu navegador en `http://localhost:3000` para interactuar con la API.

## Comandos Adicionales

### Prisma Studio
Para administrar la base de datos visualmente:
```bash
npx prisma studio
```

## Tecnologías Utilizadas
- NestJS
- GraphQL
- Prisma ORM
- PostgreSQL

## Solución de Problemas
- Asegúrate de tener todas las dependencias instaladas
- Verifica la configuración de tu archivo `.env`
- Comprueba que PostgreSQL esté corriendo correctamente
