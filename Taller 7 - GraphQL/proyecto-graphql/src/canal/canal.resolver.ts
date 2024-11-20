import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CanalService } from './canal.service';
import { Canal } from './models/canal.model';

@Resolver(() => Canal)
export class CanalResolver {
  constructor(private readonly canalService: CanalService) {}

  @Query(() => [Canal])
  async canales() {
    return this.canalService.getAll();
  }

  @Mutation(() => Canal)
  async createCanal(@Args('nombre') nombre: string) {
    return this.canalService.create({ nombre });
  }

  @Mutation(() => Canal)
  async updateCanal(@Args('id', { type: () => Int }) id: number, @Args('nombre') nombre: string) {
    return this.canalService.update(id, { nombre });
  }

  @Mutation(() => Boolean)
  async deleteCanal(@Args('id', { type: () => Int }) id: number) {
    await this.canalService.delete(id);
    return true;
  }
}
