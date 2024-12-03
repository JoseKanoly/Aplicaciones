import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Channel } from './entities/channel.entity';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';

@Injectable()
export class ChannelService {
  constructor(
    @InjectRepository(Channel)
    private channelRepository: Repository<Channel>,
  ) {}

  create(createChannelDto: CreateChannelDto) {
    const channel = this.channelRepository.create(createChannelDto);
    return this.channelRepository.save(channel);
  }

  findAll() {
    return this.channelRepository.find();
  }

  findOne(id: number) {
    return this.channelRepository.findOne({ where: { id } });
  }

  async update(id: number, updateChannelDto: UpdateChannelDto) {
    await this.channelRepository.update(id, updateChannelDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.channelRepository.delete(id);
    return { deleted: true };
  }
}

