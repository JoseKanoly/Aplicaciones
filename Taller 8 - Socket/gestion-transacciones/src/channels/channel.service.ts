import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChannelService {
  constructor(private prisma: PrismaService) {}

  async createChannel(name: string, description: string) {
    return this.prisma.channel.create({
      data: { name, description },
    });
  }

  async getAllChannels() {
    return this.prisma.channel.findMany();
  }
}
