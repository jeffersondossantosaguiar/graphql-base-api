import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '../dtos/user/create-user.input';
import { User } from '../entities/user';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  public async execute(payload: CreateUserInput): Promise<User> {
    const user = this.getEntityFromPayload(payload);
    return this.userRepository.create(user);
  }

  private getEntityFromPayload(payload: CreateUserInput): User {
    return new User({
      email: payload.email,
      name: payload.name,
      password: payload.password,
    });
  }
}
