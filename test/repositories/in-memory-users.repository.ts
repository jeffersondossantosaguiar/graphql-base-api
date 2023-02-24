import { User } from '../../src/application/entities/user';
import { UserRepository } from '../../src/application/repositories/user.repository';

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findById(userId: String): Promise<User> {
    const user = this.users.find((user) => user.id === userId);

    return user;
  }

  async findByEmail(email: String): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async listAllUsers(): Promise<User[]> {
    return this.users;
  }
}
