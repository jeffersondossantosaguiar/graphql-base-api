import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class ListAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  public async execute(): Promise<User[]> {
    const users = await this.userRepository.listAllUsers();

    return users;
  }
}
