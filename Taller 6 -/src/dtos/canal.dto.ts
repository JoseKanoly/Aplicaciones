import { IsNotEmpty } from "class-validator";

export class CreateCanalDto {
  @IsNotEmpty()
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
