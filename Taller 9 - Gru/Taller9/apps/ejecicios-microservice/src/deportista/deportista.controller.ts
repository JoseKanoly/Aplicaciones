import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DeportistaService } from './deportista.service';
import { CrearDeportistaDto } from './dto/crear-deportista.dto';

@Controller()
export class DeportistaController {
  constructor(private readonly deportistaService: DeportistaService) {}

  @MessagePattern('crearDeportista')
  crear(@Payload() crearDeportistaDto: CrearDeportistaDto) {
    return this.deportistaService.crear(crearDeportistaDto);
  }

  @MessagePattern('obtenerTodosDeportistas')
  obtenerTodos() {
    return this.deportistaService.obtenerTodos();
  }

  @MessagePattern('obtenerUnDeportista')
  obtenerUno(@Payload() id: number) {
    return this.deportistaService.obtenerUno(id);
  }

  @MessagePattern('actualizarDeportista')
  actualizar(@Payload() data: { id: number; deportista: Partial<CrearDeportistaDto> }) {
    return this.deportistaService.actualizar(data.id, data.deportista);
  }

  @MessagePattern('eliminarDeportista')
  eliminar(@Payload() id: number) {
    return this.deportistaService.eliminar(id);
  }
}

