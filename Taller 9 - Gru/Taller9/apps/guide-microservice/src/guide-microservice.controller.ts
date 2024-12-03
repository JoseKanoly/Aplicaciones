import { Controller, Get } from '@nestjs/common';
import { GuideMicroserviceService } from './guide-microservice.service';

@Controller()
export class GuideMicroserviceController {
  constructor(private readonly guideMicroserviceService: GuideMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.guideMicroserviceService.getHello();
  }
}
