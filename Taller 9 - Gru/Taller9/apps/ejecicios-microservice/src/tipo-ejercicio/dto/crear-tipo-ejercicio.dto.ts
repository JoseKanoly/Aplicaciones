import { IsString } from 'class-validator';

export class CrearTipoEjercicioDto {
  @IsString()
  tipo: string;
}

