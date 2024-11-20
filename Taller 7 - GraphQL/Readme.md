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

## Capturas 
- Query 
![Query Obtener todos los canales](https://github.com/user-attachments/assets/0f4dcad5-df39-4e4f-84c7-582a90eca983)
![Query Obtener todos los programas](https://github.com/user-attachments/assets/74b209fe-3e9e-4da1-9548-92c60b16d6a6)
![Query Obtener todas las guías](https://github.com/user-attachments/assets/d4b9387d-9f6b-42ea-8ba3-7d077f1f5900)
![Mutation Crear una guía](https://github.com/user-attachments/assets/9d93af12-9dd0-45f1-ba40-83c87f1f7f19)
- Mutation
![Mutation Crear un programa](https://github.com/user-attachments/assets/b6ee835c-7da7-419f-8aad-912fc6810e39)
![Mutation Crear un canal](https://github.com/user-attachments/assets/fdd6564c-2313-4a40-a1da-7cdaad88fa70)
![Mutation Actualizar una guía](https://github.com/user-attachments/assets/4cb3734f-13e7-4196-83fd-f316c972d06c)
![Mutation Actualizar un programa](https://github.com/user-attachments/assets/f41fd323-7595-4c91-b007-67b3f09799fd)
![Mutation Actualizar un canal](https://github.com/user-attachments/assets/c5aaf875-9bcb-437d-9840-edadec880641)
