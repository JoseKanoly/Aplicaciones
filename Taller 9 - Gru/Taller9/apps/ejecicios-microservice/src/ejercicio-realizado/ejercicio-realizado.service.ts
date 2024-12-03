import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearEjercicioRealizadoDto } from './dto/crear-ejercicio-realizado.dto';
import { EjercicioRealizado } from './entities/ejercicio-realizado.entity';

@Injectable()
export class EjercicioRealizadoService {
  constructor(
    @InjectRepository(EjercicioRealizado)
    private ejercicioRealizadoRepository: Repository<EjercicioRealizado>,
  ) {}

  crear(crearEjercicioRealizadoDto: CrearEjercicioRealizadoDto) {
    const ejercicioRealizado = this.ejercicioRealizadoRepository.create(crearEjercicioRealizadoDto);
    return this.ejercicioRealizadoRepository.save(ejercicioRealizado);
  }

  obtenerTodos() {
    return this.ejercicioRealizadoRepository.find({
      relations: ['tipoEjercicio', 'deportista'],
    });
  }

  obtenerUno(id: number) {
    return this.ejercicioRealizadoRepository.findOne({
      where: { id },
      relations: ['tipoEjercicio', 'deportista'],
    });
  }

  actualizar(id: number, actualizarEjercicioRealizadoDto: any) {
    return this.ejercicioRealizadoRepository.update(id, actualizarEjercicioRealizadoDto);
  }

  eliminar(id: number) {
    return this.ejercicioRealizadoRepository.delete(id);
  }
}

