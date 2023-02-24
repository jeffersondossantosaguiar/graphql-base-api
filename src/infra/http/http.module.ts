import { Module } from '@nestjs/common';
import { UsersResolver } from '../../application/resolvers/users.resolver';
import { CreateUserUseCase } from '../../application/use-cases/create-user';
import { ListAllUsersUseCase } from '../../application/use-cases/list-users';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UsersResolver, CreateUserUseCase, ListAllUsersUseCase],
})
export class HttpModule {}
