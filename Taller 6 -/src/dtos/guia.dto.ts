import { IsNotEmpty, IsDateString, IsInt, IsOptional } from "class-validator";

export class CreateGuiaDto {
  @IsNotEmpty()
  @IsInt()
  canalId: number;

  @IsNotEmpty()
  @IsInt()
  programaId: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: string;

  @IsNotEmpty()
  @IsInt()
  hora: number;

  @IsOptional()
  @IsInt()
  rating?: number;

  constructor(canalId: number, programaId: number, fecha: string, hora: number, rating?: number) {
    this.canalId = canalId;
    this.programaId = programaId;
    this.fecha = fecha;
    this.hora = hora;
    this.rating = rating;  // Puede ser opcional
  }
}
