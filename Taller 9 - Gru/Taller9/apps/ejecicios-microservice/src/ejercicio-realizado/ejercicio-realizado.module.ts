import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EjercicioRealizadoService } from './ejercicio-realizado.service';
import { EjercicioRealizadoController } from './ejercicio-realizado.controller';
import { EjercicioRealizado } from './entities/ejercicio-realizado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EjercicioRealizado])],
  controllers: [EjercicioRealizadoController],
  providers: [EjercicioRealizadoService],
})
export class EjercicioRealizadoModule {}

