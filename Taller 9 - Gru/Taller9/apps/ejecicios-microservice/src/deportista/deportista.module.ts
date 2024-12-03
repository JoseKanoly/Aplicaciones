import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeportistaController } from './deportista.controller';
import { DeportistaService } from './deportista.service';
import { Deportista } from './entities/deportista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deportista])],
  controllers: [DeportistaController],
  providers: [DeportistaService],
})
export class DeportistaModule {}

