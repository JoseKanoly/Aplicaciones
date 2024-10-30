import { IsNotEmpty, IsNumber, IsString, IsISO8601 } from 'class-validator';

export class GuiaDTO {
  @IsNotEmpty()
  @IsNumber()
  canalId!: number;

  @IsNotEmpty()
  @IsNumber()
  programaId!: number;

  @IsNotEmpty()
  @IsISO8601()
  fecha!: string;
  
  @IsNotEmpty()
  @IsString()
  horaTransmision!: string;

  @IsNotEmpty()
  @IsNumber()
  escalaRating!: number;
}