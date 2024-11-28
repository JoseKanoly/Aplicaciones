// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { TransactionModule } from './transactions/transaction.module';

@Module({
  imports: [TransactionModule],
  providers: [AppGateway],
})
export class AppModule {}
