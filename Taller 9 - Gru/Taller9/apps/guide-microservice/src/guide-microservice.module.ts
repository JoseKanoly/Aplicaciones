import { Module } from '@nestjs/common';
import { GuideMicroserviceController } from './guide-microservice.controller';
import { GuideMicroserviceService } from './guide-microservice.service';

@Module({
  imports: [],
  controllers: [GuideMicroserviceController],
  providers: [GuideMicroserviceService],
})
export class GuideMicroserviceModule {}
