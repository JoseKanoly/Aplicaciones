import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProgramService } from './program.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Controller()
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @MessagePattern('createProgram')
  create(@Payload() createProgramDto: CreateProgramDto) {
    return this.programService.create(createProgramDto);
  }

  @MessagePattern('findAllPrograms')
  findAll() {
    return this.programService.findAll();
  }

  @MessagePattern('findOneProgram')
  findOne(@Payload() id: number) {
    return this.programService.findOne(id);
  }

  @MessagePattern('updateProgram')
  update(@Payload() updateProgramDto: UpdateProgramDto) {
    return this.programService.update(updateProgramDto.id, updateProgramDto);
  }

  @MessagePattern('removeProgram')
  remove(@Payload() id: number) {
    return this.programService.remove(id);
  }
}

