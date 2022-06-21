import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../infra/database/prisma/prisma.service';

@Resolver()
export class UsersResolver {

  constructor(
    private readonly prismaService: PrismaService
  ) {}

  @Query(() => String)
  getHello() {
    return 'Hello World!';
  }
}
