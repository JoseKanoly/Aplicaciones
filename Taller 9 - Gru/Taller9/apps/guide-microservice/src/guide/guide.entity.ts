import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guide {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  channelId: number;

  @Column()
  programId: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  transmissionTime: Date;

  @Column('decimal', { precision: 5, scale: 2 })
  ratingScale: number;
}

