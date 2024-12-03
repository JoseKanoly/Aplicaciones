import { IsNumber, IsDate, IsString } from 'class-validator';

export class CrearEjercicioRealizadoDto {
  @IsNumber()
  tipoEjercicioId: number;

  @IsNumber()
  deportistaId: number;

  @IsDate()
  fecha: Date;

  @IsString()
  hora: string;

  @IsString()
  tiempoTranscurrido: string;

  @IsNumber()
  caloriasQuemadas: number;
}

