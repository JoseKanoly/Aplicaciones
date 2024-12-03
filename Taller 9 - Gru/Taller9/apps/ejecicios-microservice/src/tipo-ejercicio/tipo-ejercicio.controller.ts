import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TipoEjercicioService } from './tipo-ejercicio.service';
import { CrearTipoEjercicioDto } from './dto/crear-tipo-ejercicio.dto';

@Controller()
export class TipoEjercicioController {
  constructor(private readonly tipoEjercicioService: TipoEjercicioService) {}

  @MessagePattern('crearTipoEjercicio')
  crear(@Payload() crearTipoEjercicioDto: CrearTipoEjercicioDto) {
    return this.tipoEjercicioService.crear(crearTipoEjercicioDto);
  }

  @MessagePattern('obtenerTodosTiposEjercicio')
  obtenerTodos() {
    return this.tipoEjercicioService.obtenerTodos();
  }

  @MessagePattern('obtenerUnTipoEjercicio')
  obtenerUno(@Payload() id: number) {
    return this.tipoEjercicioService.obtenerUno(id);
  }

  @MessagePattern('actualizarTipoEjercicio')
  actualizar(@Payload() data: { id: number; tipo: string }) {
    return this.tipoEjercicioService.actualizar(data.id, { tipo: data.tipo });
  }

  @MessagePattern('eliminarTipoEjercicio')
  eliminar(@Payload() id: number) {
    return this.tipoEjercicioService.eliminar(id);
  }
}

