import { Injectable } from '@nestjs/common';

@Injectable()
export class GuideMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
