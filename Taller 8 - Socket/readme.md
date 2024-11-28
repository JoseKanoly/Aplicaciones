# WebSocket Transaction Tracking System

## Project Description
Real-time transaction tracking system using NestJS, WebSocket, Prisma ORM, and Neon PostgreSQL database.

## Prerequisites
- Node.js (v18+)
- npm
- PostgreSQL client

## Installation Steps

### 1. Clone Repository
```bash
git clone https://github.com/JoseKanoly/Aplicaciones.git
cd "Aplicaciones/Taller 8 - Socket"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Database Configuration
Create `.env` file with provided Neon database URL:
```
DATABASE_URL="postgresql://neondb_owner:3Db8BeJsXLcw@ep-noisy-darkness-a5x70lve.us-east-2.aws.neon.tech/prisma_migrate_shadow_db_53b15455-8cfc-471d-ac69-0e3320a75b8f?sslmode=require"
PORT=3000
```

### 4. Database Initialization
```bash
npx prisma migrate dev
npx prisma generate
```

### 5. Start Server
```bash
npm run start
```

## WebSocket Endpoints
- Connection: `ws://localhost:3001`
- Events:
  - `agregar-transaccion`: Create transaction
  - `consultar-activos`: Get active transactions

## Technologies
- NestJS
- WebSocket
- Prisma ORM
- Neon PostgreSQL
- TypeScript

## Troubleshooting
- Verify database connection
- Check Node.js version
- Validate environment variables

## Project Structure
- `src/channel/`: Channel management
- `src/program/`: Program management
- `src/transactions/`: Transaction handling
- `src/app.gateway.ts`: WebSocket configuration
