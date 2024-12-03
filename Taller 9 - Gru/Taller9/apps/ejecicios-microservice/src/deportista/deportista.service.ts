import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deportista } from './entities/deportista.entity';
import { CrearDeportistaDto } from './dto/crear-deportista.dto';

@Injectable()
export class DeportistaService {
  constructor(
    @InjectRepository(Deportista)
    private deportistaRepository: Repository<Deportista>,
  ) {}

  crear(crearDeportistaDto: CrearDeportistaDto) {
    const deportista = this.deportistaRepository.create(crearDeportistaDto);
    return this.deportistaRepository.save(deportista);
  }

  obtenerTodos() {
    return this.deportistaRepository.find();
  }

  obtenerUno(id: number) {
    return this.deportistaRepository.findOne({ where: { id } });
  }

  actualizar(id: number, actualizarDeportistaDto: Partial<CrearDeportistaDto>) {
    return this.deportistaRepository.update(id, actualizarDeportistaDto);
  }

  eliminar(id: number) {
    return this.deportistaRepository.delete(id);
  }
}

