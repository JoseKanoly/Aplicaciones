import { WebSocketGateway, SubscribeMessage, MessageBody, WsResponse, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Injectable } from '@nestjs/common';
import { TransactionService } from './transactions/transaction.service';
import { Transaction } from '@prisma/client';
import { Socket } from 'socket.io';  

@WebSocketGateway(3001, { cors: true })
@Injectable()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private connectedClients: Set<Socket> = new Set();  
  constructor(private readonly transactionService: TransactionService) {}

  handleConnection(client: Socket) {
    this.connectedClients.add(client);  
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    this.connectedClients.delete(client); 
    console.log('Client disconnected:', client.id);
  }

  @SubscribeMessage('agregar-transaccion')
  async agregarTransaccion(@MessageBody() transaccionData: any): Promise<WsResponse<Transaction>> {
    const transaction = await this.transactionService.createTransaction(
      transaccionData.channelId,
      transaccionData.programId,
      transaccionData.date,
      transaccionData.time,
      transaccionData.rating,
    );
    return { event: 'transaccion-agregada', data: transaction };
  }


  @SubscribeMessage('consultar-activos')
  async consultarActivos(@MessageBody() data: any): Promise<void> {
    const activeTransactions = await this.transactionService.getActiveTransactions();
    console.log('Active Transactions:', activeTransactions);


    this.connectedClients.forEach(client => {
      client.emit('transacciones-activas', activeTransactions);
    });
  }
}
