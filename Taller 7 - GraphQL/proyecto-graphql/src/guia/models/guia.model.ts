import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Canal } from '../../canal/models/canal.model';
import { Programa } from '../../programa/models/programa.model';

@ObjectType()
export class Guia {
  @Field(() => Int)
  id: number;

  @Field(() => Canal)
  canal: Canal;

  @Field(() => Programa)
  programa: Programa;

  @Field()
  fecha: Date;

  @Field()
  hora: string;

  @Field(() => Float)
  rating: number;
}
