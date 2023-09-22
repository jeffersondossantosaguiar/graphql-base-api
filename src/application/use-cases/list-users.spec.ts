import { InMemoryUserRepository } from '../../../test/repositories/in-memory-users.repository';
import { CreateUserUseCase } from './create-user';
import { ListAllUsersUseCase } from './list-users';

describe('List users', () => {
  const userRepository = new InMemoryUserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  const listAllUsersUseCase = new ListAllUsersUseCase(userRepository);
  beforeEach(async () => {
    await createUserUseCase.execute({
      email: 'user1@example.com',
      name: 'User 1',
      password: '123456',
    });
    await createUserUseCase.execute({
      email: 'user2@example.com',
      name: 'User 2',
      password: '123456',
    });
  });

  it('should be able to list all users', async () => {
    const users = await listAllUsersUseCase.execute();

    expect(users).toHaveLength(2);
  });
});
