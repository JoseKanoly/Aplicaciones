import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';

@Controller()
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @MessagePattern('createChannel')
  create(@Payload() createChannelDto: CreateChannelDto) {
    return this.channelService.create(createChannelDto);
  }

  @MessagePattern('findAllChannels')
  findAll() {
    return this.channelService.findAll();
  }

  @MessagePattern('findOneChannel')
  findOne(@Payload() id: number) {
    return this.channelService.findOne(id);
  }

  @MessagePattern('updateChannel')
  update(@Payload() updateChannelDto: UpdateChannelDto) {
    return this.channelService.update(updateChannelDto.id, updateChannelDto);
  }

  @MessagePattern('removeChannel')
  remove(@Payload() id: number) {
    return this.channelService.remove(id);
  }
}

