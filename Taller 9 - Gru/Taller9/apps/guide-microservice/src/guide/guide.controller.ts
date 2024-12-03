import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GuideService } from './guide.service';
import { CreateGuideDto } from './dto/create-guide.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';

@Controller()
export class GuideController {
  constructor(private readonly guideService: GuideService) {}

  @MessagePattern('createGuide')
  create(@Payload() createGuideDto: CreateGuideDto) {
    return this.guideService.create(createGuideDto);
  }

  @MessagePattern('findAllGuides')
  findAll() {
    return this.guideService.findAll();
  }

  @MessagePattern('findOneGuide')
  findOne(@Payload() id: number) {
    return this.guideService.findOne(id);
  }

  @MessagePattern('updateGuide')
  update(@Payload() updateGuideDto: UpdateGuideDto) {
    return this.guideService.update(updateGuideDto.id, updateGuideDto);
  }

  @MessagePattern('removeGuide')
  remove(@Payload() id: number) {
    return this.guideService.remove(id);
  }
}

