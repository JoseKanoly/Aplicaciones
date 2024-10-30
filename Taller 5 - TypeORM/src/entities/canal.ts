import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Guia } from './guia';

@Entity()
export class Canal {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @OneToMany(() => Guia, (guia) => guia.canal)
  guias!: Guia[];
}