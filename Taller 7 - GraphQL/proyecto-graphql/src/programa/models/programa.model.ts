import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Programa {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  categoria: string;

  @Field()
  tipo: string;
}
