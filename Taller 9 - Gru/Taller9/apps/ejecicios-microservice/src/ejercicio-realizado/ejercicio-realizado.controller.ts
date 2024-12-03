import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EjercicioRealizadoService } from './ejercicio-realizado.service';
import { CrearEjercicioRealizadoDto } from './dto/crear-ejercicio-realizado.dto';

@Controller()
export class EjercicioRealizadoController {
  constructor(private readonly ejercicioRealizadoService: EjercicioRealizadoService) {}

  @MessagePattern('crearEjercicioRealizado')
  crear(@Payload() crearEjercicioRealizadoDto: CrearEjercicioRealizadoDto) {
    return this.ejercicioRealizadoService.crear(crearEjercicioRealizadoDto);
  }

  @MessagePattern('obtenerTodosEjerciciosRealizados')
  obtenerTodos() {
    return this.ejercicioRealizadoService.obtenerTodos();
  }

  @MessagePattern('obtenerUnEjercicioRealizado')
  obtenerUno(@Payload() id: number) {
    return this.ejercicioRealizadoService.obtenerUno(id);
  }

  @MessagePattern('actualizarEjercicioRealizado')
  actualizar(@Payload() actualizarEjercicioRealizadoDto: any) {
    return this.ejercicioRealizadoService.actualizar(
      actualizarEjercicioRealizadoDto.id,
      actualizarEjercicioRealizadoDto,
    );
  }

  @MessagePattern('eliminarEjercicioRealizado')
  eliminar(@Payload() id: number) {
    return this.ejercicioRealizadoService.eliminar(id);
  }
}

