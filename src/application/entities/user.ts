import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @Field(() => ID)
  id?: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;
}
