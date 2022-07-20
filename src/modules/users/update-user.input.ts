import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  password?: string;

}