import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('TV_GUIDE_SERVICE') private readonly tvGuideService: ClientProxy,
    @Inject('EJERCICIOS_SERVICE') private readonly ejerciciosService: ClientProxy,
  ) {}

  // TV Guide methods
  createGuide(createGuideDto: any) {
    return this.tvGuideService.send('createGuide', createGuideDto);
  }

  findAllGuides() {
    return this.tvGuideService.send('findAllGuides', {});
  }

  findOneGuide(id: number) {
    return this.tvGuideService.send('findOneGuide', id);
  }

  updateGuide(id: number, updateGuideDto: any) {
    return this.tvGuideService.send('updateGuide', { id, ...updateGuideDto });
  }

  removeGuide(id: number) {
    return this.tvGuideService.send('removeGuide', id);
  }

  // Ejercicios methods
  crearEjercicio(crearEjercicioDto: any) {
    return this.ejerciciosService.send('crearEjercicioRealizado', crearEjercicioDto);
  }

  obtenerTodosEjercicios() {
    return this.ejerciciosService.send('obtenerTodosEjerciciosRealizados', {});
  }

  obtenerUnEjercicio(id: number) {
    return this.ejerciciosService.send('obtenerUnEjercicioRealizado', id);
  }

  actualizarEjercicio(id: number, actualizarEjercicioDto: any) {
    return this.ejerciciosService.send('actualizarEjercicioRealizado', { id, ...actualizarEjercicioDto });
  }

  eliminarEjercicio(id: number) {
    return this.ejerciciosService.send('eliminarEjercicioRealizado', id);
  }
}
