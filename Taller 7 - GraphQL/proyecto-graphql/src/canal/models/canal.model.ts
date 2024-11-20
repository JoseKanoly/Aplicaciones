import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Canal {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;
}
