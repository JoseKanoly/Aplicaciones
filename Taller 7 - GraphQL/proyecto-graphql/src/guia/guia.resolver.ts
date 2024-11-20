import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GuiaService } from './guia.service';
import { Guia } from './models/guia.model';

@Resolver(() => Guia)
export class GuiaResolver {
  constructor(private readonly guiaService: GuiaService) {}

  @Query(() => [Guia])
  async guias() {
    return this.guiaService.getAll();
  }

  @Mutation(() => Guia)
  async createGuia(
    @Args('canalId', { type: () => Int }) canalId: number,
    @Args('programaId', { type: () => Int }) programaId: number,
    @Args('fecha') fecha: Date,
    @Args('hora') hora: string,
    @Args('rating', { nullable: true }) rating?: number,
  ) {
    return this.guiaService.create({ canalId, programaId, fecha, hora, rating });
  }

  @Mutation(() => Guia)
  async updateGuia(
    @Args('id', { type: () => Int }) id: number,
    @Args('fecha') fecha: Date,
    @Args('hora') hora: string,
    @Args('rating') rating: number,
  ) {
    return this.guiaService.update(id, { fecha, hora, rating });
  }

  @Mutation(() => Boolean)
  async deleteGuia(@Args('id', { type: () => Int }) id: number) {
    await this.guiaService.delete(id);
    return true;
  }
}
