import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../infra/database/database.module';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    UsersResolver,
    UsersService,
  ],
})
export class UsersModule {}
