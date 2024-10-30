import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Canal } from './canal';
import { Programa } from './programa';

@Entity()
export class Guia {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Canal, (canal) => canal.guias)
  canal!: Canal;

  @ManyToOne(() => Programa, (programa) => programa.guias)
  programa!: Programa;

  @Column()
  fecha!: Date;

  @Column()
  horaTransmision!: string;

  @Column('decimal')
  escalaRating!: number;
}