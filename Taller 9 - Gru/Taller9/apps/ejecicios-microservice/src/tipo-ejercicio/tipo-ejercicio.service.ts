import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoEjercicio } from './entities/tipo-ejercicio.entity';
import { CrearTipoEjercicioDto } from './dto/crear-tipo-ejercicio.dto';

@Injectable()
export class TipoEjercicioService {
  constructor(
    @InjectRepository(TipoEjercicio)
    private tipoEjercicioRepository: Repository<TipoEjercicio>,
  ) {}

  crear(crearTipoEjercicioDto: CrearTipoEjercicioDto) {
    const tipoEjercicio = this.tipoEjercicioRepository.create(crearTipoEjercicioDto);
    return this.tipoEjercicioRepository.save(tipoEjercicio);
  }

  obtenerTodos() {
    return this.tipoEjercicioRepository.find();
  }

  obtenerUno(id: number) {
    return this.tipoEjercicioRepository.findOne({ where: { id } });
  }

  actualizar(id: number, actualizarTipoEjercicioDto: Partial<CrearTipoEjercicioDto>) {
    return this.tipoEjercicioRepository.update(id, actualizarTipoEjercicioDto);
  }

  eliminar(id: number) {
    return this.tipoEjercicioRepository.delete(id);
  }
}

