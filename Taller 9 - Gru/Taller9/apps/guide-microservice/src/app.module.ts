import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GuideModule } from './guide/guide.module';
import { ChannelModule } from './channel/channel.module';
import { ProgramModule } from './program/program.module';
import { Guide } from './guide/entities/guide.entity';
import { Channel } from './channel/entities/channel.entity';
import { Program } from './program/entities/program.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        ssl: {
          rejectUnauthorized: false,
        },
        entities: [Guide, Channel, Program],
        synchronize: true, // Be careful with this in production
      }),
      inject: [ConfigService],
    }),
    GuideModule,
    ChannelModule,
    ProgramModule,
  ],
})
export class AppModule {}

