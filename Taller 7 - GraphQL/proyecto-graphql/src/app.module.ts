import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CanalModule } from './canal/canal.module';
import { ProgramaModule } from './programa/programa.module';
import { GuiaModule } from './guia/guia.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CanalModule,
    ProgramaModule,
    GuiaModule,
  ],
})
export class AppModule {}
