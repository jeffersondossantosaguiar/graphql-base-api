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
  async users() {
    return await this.usersService.listAllUsers();
  }

  @Query(() => User)
  async user(@Args('id') id: string) {
    return await this.usersService.getUserById(id);
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput) {
    return await this.usersService.createUser(data);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput
  ) {
    return await this.usersService.updateUser(id, data);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args('id') id: string,
  ) {
    return await this.usersService.deleteUser(id);
  }
}
