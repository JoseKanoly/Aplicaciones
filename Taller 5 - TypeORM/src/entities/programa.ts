import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Guia } from './guia';

@Entity()
export class Programa {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  categoria!: string;

  @Column()
  tipo!: string;

  @OneToMany(() => Guia, (guia) => guia.programa)
  guias!: Guia[];
}