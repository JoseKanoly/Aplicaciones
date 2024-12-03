import { Test, TestingModule } from '@nestjs/testing';
import { GuideMicroserviceController } from './guide-microservice.controller';
import { GuideMicroserviceService } from './guide-microservice.service';

describe('GuideMicroserviceController', () => {
  let guideMicroserviceController: GuideMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GuideMicroserviceController],
      providers: [GuideMicroserviceService],
    }).compile();

    guideMicroserviceController = app.get<GuideMicroserviceController>(GuideMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(guideMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
