import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Program } from './entities/program.entity';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private programRepository: Repository<Program>,
  ) {}

  create(createProgramDto: CreateProgramDto) {
    const program = this.programRepository.create(createProgramDto);
    return this.programRepository.save(program);
  }

  findAll() {
    return this.programRepository.find();
  }

  findOne(id: number) {
    return this.programRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProgramDto: UpdateProgramDto) {
    await this.programRepository.update(id, updateProgramDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.programRepository.delete(id);
    return { deleted: true };
  }
}

