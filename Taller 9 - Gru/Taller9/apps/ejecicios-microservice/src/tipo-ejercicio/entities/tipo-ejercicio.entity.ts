import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EjercicioRealizado } from '../../ejercicio-realizado/entities/ejercicio-realizado.entity';

@Entity()
export class TipoEjercicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @OneToMany(() => EjercicioRealizado, (ejercicio) => ejercicio.tipoEjercicio)
  ejerciciosRealizados: EjercicioRealizado[];
}

