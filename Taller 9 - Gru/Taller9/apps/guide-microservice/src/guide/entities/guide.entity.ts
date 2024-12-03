import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Channel } from '../../channel/entities/channel.entity';
import { Program } from '../../program/entities/program.entity';

@Entity()
export class Guide {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Channel)
  @JoinColumn({ name: 'channelId' })
  channel: Channel;

  @Column()
  channelId: number;

  @ManyToOne(() => Program)
  @JoinColumn({ name: 'programId' })
  program: Program;

  @Column()
  programId: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  transmissionTime: Date;

  @Column('decimal', { precision: 5, scale: 2 })
  ratingScale: number;
}

