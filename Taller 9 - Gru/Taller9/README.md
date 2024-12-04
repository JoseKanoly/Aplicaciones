# Sistema de Guía de TV y Ejercicios

Este proyecto consta de dos microservicios (Guía de TV y Ejercicios) y una puerta de enlace, construidos con NestJS y utilizando Neon como base de datos PostgreSQL sin servidor.

## Requisitos Previos
- Node.js (versión 14 o posterior)
- npm (viene con Node.js)
- Una cuenta de Neon (https://neon.tech)

## Configuración del Proyecto
1. Clonar el repositorio:
   ```bash
   git clone
   cd taller9
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar base de datos Neon:
   1. Crear un nuevo proyecto en Neon
   2. Obtener URL de conexión de la base de datos

4. Crear un archivo `.env` en el directorio raíz y agregar la URL de la base de datos Neon:
   ```plaintext
   DATABASE_URL=tu_url_de_base_de_datos_neon_aqui
   ```

## Estructura del Proyecto
El proyecto está estructurado de la siguiente manera:
```plaintext
proyecto-guia-tv/
├── apps/
│   ├── gateway/
│   ├── microservicio-guia/
│   └── ejecicios-microservice/
├── nest-cli.json
├── package.json
├── tsconfig.json
└── README.md
```

## Ejecutar el Proyecto
Necesitas ejecutar cada microservicio y la puerta de enlace por separado. Abre tres ventanas de terminal:

1. En la primera terminal, iniciar microservicio de Guía de TV:
   ```bash
   npm run start:dev microservicio-guia
   ```

2. En la segunda terminal, iniciar microservicio de Reservaciones:
   ```bash
   npm run start:dev ejecicios-microservice
   ```

3. En la tercera terminal, iniciar Puerta de Enlace:
   ```bash
   npm run start:dev gateway
   ```

La puerta de enlace estará disponible en `http://localhost:3000`.

## Endpoints de API
### Servicio de Guía de TV
- POST /guias - Crear una nueva guía
- GET /guias - Obtener todas las guías
- GET /guias/:id - Obtener una guía específica
- PUT /guias/:id - Actualizar una guía
- DELETE /guias/:id - Eliminar una guía
