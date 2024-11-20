import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProgramaService } from './programa.service';
import { Programa } from './models/programa.model';

@Resolver(() => Programa)
export class ProgramaResolver {
  constructor(private readonly programaService: ProgramaService) {}

  @Query(() => [Programa])
  async programas() {
    return this.programaService.getAll();
  }

  @Mutation(() => Programa)
  async createPrograma(
    @Args('nombre') nombre: string,
    @Args('categoria') categoria: string,
    @Args('tipo') tipo: string,
  ) {
    return this.programaService.create({ nombre, categoria, tipo });
  }

  @Mutation(() => Programa)
  async updatePrograma(
    @Args('id', { type: () => Int }) id: number,
    @Args('nombre') nombre: string,
    @Args('categoria') categoria: string,
    @Args('tipo') tipo: string,
  ) {
    return this.programaService.update(id, { nombre, categoria, tipo });
  }

  @Mutation(() => Boolean)
  async deletePrograma(@Args('id', { type: () => Int }) id: number) {
    await this.programaService.delete(id);
    return true;
  }
}
