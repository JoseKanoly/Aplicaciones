import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TipoEjercicioModule } from './tipo-ejercicio/tipo-ejercicio.module';
import { DeportistaModule } from './deportista/deportista.module';
import { EjercicioRealizadoModule } from './ejercicio-realizado/ejercicio-realizado.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        ssl: {
          rejectUnauthorized: false,
        },
        autoLoadEntities: true,
        synchronize: true, // Ten cuidado con esto en producción
      }),
      inject: [ConfigService],
    }),
    TipoEjercicioModule,
    DeportistaModule,
    EjercicioRealizadoModule,
  ],
})
export class AppModule {}

