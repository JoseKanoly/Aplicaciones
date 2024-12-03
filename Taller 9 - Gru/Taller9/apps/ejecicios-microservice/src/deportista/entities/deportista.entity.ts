import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EjercicioRealizado } from '../../ejercicio-realizado/entities/ejercicio-realizado.entity';

@Entity()
export class Deportista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('float')
  peso: number;

  @Column('float')
  altura: number;

  @Column()
  edad: number;

  @OneToMany(() => EjercicioRealizado, (ejercicio) => ejercicio.deportista)
  ejerciciosRealizados: EjercicioRealizado[];
}

