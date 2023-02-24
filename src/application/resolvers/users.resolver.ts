import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from '../dtos/user/create-user.input';
import { User } from '../entities/user';
import { CreateUserUseCase } from '../use-cases/create-user';
import { ListAllUsersUseCase } from '../use-cases/list-users';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly listAllUsersUseCase: ListAllUsersUseCase,
  ) {}

  @Query(() => [User])
  async users() {
    return await this.listAllUsersUseCase.execute();
  }

  /*   @Query(() => User)
  async user(@Args('id') id: string) {
    return await this.usersService.getUserById(id);
  }
 */
  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput) {
    return await this.createUserUseCase.execute(data);
  }
  /* 
  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput,
  ) {
    return await this.usersService.updateUser(id, data);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string) {
    return await this.usersService.deleteUser(id);
  } */
}
