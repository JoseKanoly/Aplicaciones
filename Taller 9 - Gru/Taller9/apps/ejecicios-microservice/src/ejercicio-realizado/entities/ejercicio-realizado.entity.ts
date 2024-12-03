import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TipoEjercicio } from '../../tipo-ejercicio/entities/tipo-ejercicio.entity';
import { Deportista } from '../../deportista/entities/deportista.entity';

@Entity()
export class EjercicioRealizado {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TipoEjercicio, (tipoEjercicio) => tipoEjercicio.ejerciciosRealizados)
  @JoinColumn({ name: 'tipoEjercicioId' })
  tipoEjercicio: TipoEjercicio;

  @ManyToOne(() => Deportista, (deportista) => deportista.ejerciciosRealizados)
  @JoinColumn({ name: 'deportistaId' })
  deportista: Deportista;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'time' })
  hora: string;

  @Column('interval')
  tiempoTranscurrido: string;

  @Column('float')
  caloriasQuemadas: number;
}

