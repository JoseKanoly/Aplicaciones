# Sistema de Seguimiento de Transacciones WebSocket

## Descripción del Proyecto
Sistema de seguimiento de transacciones en tiempo real utilizando NestJS, WebSocket, Prisma ORM y base de datos Neon PostgreSQL.

## Requisitos Previos
- Node.js (v18+)
- npm
- Cliente PostgreSQL

## Pasos de Instalación

### 1. Clonar Repositorio
```bash
git clone https://github.com/JoseKanoly/Aplicaciones.git
cd "Aplicaciones/Taller 8 - Socket"
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Configuración de Base de Datos
Crear archivo `.env` con URL de base de datos Neon:
```
DATABASE_URL="postgresql://neondb_owner:3Db8BeJsXLcw@ep-noisy-darkness-a5x70lve.us-east-2.aws.neon.tech/prisma_migrate_shadow_db_53b15455-8cfc-471d-ac69-0e3320a75b8f?sslmode=require"
PORT=3000
```

### 4. Inicialización de Base de Datos
```bash
npx prisma migrate dev
npx prisma generate
```

### 5. Iniciar Servidor
```bash
npm run start
```

## Endpoints WebSocket
- Conexión: `ws://localhost:3001`
- Eventos:
  - `agregar-transaccion`: Crear transacción
  - `consultar-activos`: Obtener transacciones activas

## Tecnologías
- NestJS
- WebSocket
- Prisma ORM
- Neon PostgreSQL
- TypeScript

## Resolución de Problemas
- Verificar conexión a base de datos
- Revisar versión de Node.js
- Validar variables de entorno

## Estructura del Proyecto
- `src/channel/`: Gestión de canales
- `src/program/`: Gestión de programas
- `src/transactions/`: Manejo de transacciones
- `src/app.gateway.ts`: Configuración WebSocket


## Imagenes
![Envio](https://github.com/user-attachments/assets/f5fbb5a4-164c-423b-8e23-2ac0211ea4d8)
![Envio y Entrega](https://github.com/user-attachments/assets/2f523799-9ef3-4716-9e1a-390f60b62161)
![Entrega](https://github.com/user-attachments/assets/8c27e555-3493-4580-ae1e-f46e10c4a438)
![Conectados](https://github.com/user-attachments/assets/39785086-6d6d-4bb2-81ef-4730e70fff60)
![Captura de pantalla (278)](https://github.com/user-attachments/assets/eddfd667-17c4-46bd-be1d-9df6b5f9c54b)

