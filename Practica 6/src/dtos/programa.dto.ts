import { IsNotEmpty } from "class-validator";

export class CreateProgramaDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  categoria: string;

  @IsNotEmpty()
  tipo: string;

  constructor(nombre: string, categoria: string, tipo: string) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.tipo = tipo;
  }
}
