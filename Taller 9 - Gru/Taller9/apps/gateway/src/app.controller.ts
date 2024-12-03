import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // TV Guide endpoints
  @Post('guides')
  createGuide(@Body() createGuideDto: any) {
    return this.appService.createGuide(createGuideDto);
  }

  @Get('guides')
  findAllGuides() {
    return this.appService.findAllGuides();
  }

  @Get('guides/:id')
  findOneGuide(@Param('id') id: string) {
    return this.appService.findOneGuide(+id);
  }

  @Put('guides/:id')
  updateGuide(@Param('id') id: string, @Body() updateGuideDto: any) {
    return this.appService.updateGuide(+id, updateGuideDto);
  }

  @Delete('guides/:id')
  removeGuide(@Param('id') id: string) {
    return this.appService.removeGuide(+id);
  }

  // Ejercicios endpoints
  @Post('ejercicios')
  crearEjercicio(@Body() crearEjercicioDto: any) {
    return this.appService.crearEjercicio(crearEjercicioDto);
  }

  @Get('ejercicios')
  obtenerTodosEjercicios() {
    return this.appService.obtenerTodosEjercicios();
  }

  @Get('ejercicios/:id')
  obtenerUnEjercicio(@Param('id') id: string) {
    return this.appService.obtenerUnEjercicio(+id);
  }

  @Put('ejercicios/:id')
  actualizarEjercicio(@Param('id') id: string, @Body() actualizarEjercicioDto: any) {
    return this.appService.actualizarEjercicio(+id, actualizarEjercicioDto);
  }

  @Delete('ejercicios/:id')
  eliminarEjercicio(@Param('id') id: string) {
    return this.appService.eliminarEjercicio(+id);
  }
}

