import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEjercicioController } from './tipo-ejercicio.controller';
import { TipoEjercicioService } from './tipo-ejercicio.service';
import { TipoEjercicio } from './entities/tipo-ejercicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoEjercicio])],
  controllers: [TipoEjercicioController],
  providers: [TipoEjercicioService],
})
export class TipoEjercicioModule {}

