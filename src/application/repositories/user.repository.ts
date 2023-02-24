import { User } from '../entities/user';

export abstract class UserRepository {
  abstract create(user: User): Promise<User>;
  abstract findById(userId: String): Promise<User | null>;
  abstract findByEmail(email: String): Promise<User | null>;
  abstract listAllUsers(): Promise<User[]>;
}
