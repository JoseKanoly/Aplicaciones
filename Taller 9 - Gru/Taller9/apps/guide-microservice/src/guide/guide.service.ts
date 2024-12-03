import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guide } from './entities/guide.entity';
import { CreateGuideDto } from './dto/create-guide.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';

@Injectable()
export class GuideService {
  constructor(
    @InjectRepository(Guide)
    private guideRepository: Repository<Guide>,
  ) {}

  create(createGuideDto: CreateGuideDto) {
    const guide = this.guideRepository.create(createGuideDto);
    return this.guideRepository.save(guide);
  }

  findAll() {
    return this.guideRepository.find({ relations: ['channel', 'program'] });
  }

  findOne(id: number) {
    return this.guideRepository.findOne({ where: { id }, relations: ['channel', 'program'] });
  }

  async update(id: number, updateGuideDto: UpdateGuideDto) {
    await this.guideRepository.update(id, updateGuideDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.guideRepository.delete(id);
    return { deleted: true };
  }
}

