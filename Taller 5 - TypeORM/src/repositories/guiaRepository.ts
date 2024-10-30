import { AppDataSource } from '../database';
import { Guia } from '../entities/guia';

export class GuiaRepository {
  private guiaRepository = AppDataSource.getRepository(Guia);

  async createGuia(guia: Guia): Promise<Guia> {
    return await this.guiaRepository.save(guia);
  }

  async getAllGuias(): Promise<Guia[]> {
    return await this.guiaRepository.find({ relations: ['canal', 'programa'] });
  }
}