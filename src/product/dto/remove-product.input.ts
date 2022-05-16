import { Field, InputType, Int } from '@nestjs/graphql';
import { IsArray, IsInt } from 'class-validator';

@InputType()
export class removeProductInput {
  @IsArray()
  @IsInt({ each: true })
  @Field(() => [Int])
  productIds: number[];
}
