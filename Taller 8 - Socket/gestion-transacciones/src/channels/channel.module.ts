import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ChannelService, PrismaService],
  exports: [ChannelService],
})
export class ChannelModule {}
