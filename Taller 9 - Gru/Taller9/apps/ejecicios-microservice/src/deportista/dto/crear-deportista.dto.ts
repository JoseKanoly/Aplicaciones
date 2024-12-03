import { IsString, IsNumber, Min } from 'class-validator';

export class CrearDeportistaDto {
  @IsString()
  nombre: string;

  @IsNumber()
  @Min(0)
  peso: number;

  @IsNumber()
  @Min(0)
  altura: number;

  @IsNumber()
  @Min(0)
  edad: number;
}

