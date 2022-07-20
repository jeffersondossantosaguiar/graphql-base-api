import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';
import { User } from './user';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {

  constructor(
    private readonly usersService: UsersService
  ) {}

  @Query(() => [User])
  users() {
    return this.usersService.listAllUsers();
  }

  @Query(() => User)
  user(@Args('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Mutation(() => User)
  createUser(@Args('data') data: CreateUserInput) {
    return this.usersService.createUser(data);
  }

  @Mutation(() => User)
  updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput
  ) {
    return this.usersService.updateUser(id, data);
  }
}
