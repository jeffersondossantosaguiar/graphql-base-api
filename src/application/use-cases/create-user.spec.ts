import { InMemoryUserRepository } from '../../../test/repositories/in-memory-users.repository';
import { CreateUserUseCase } from './create-user';

describe('Create user', () => {
  const userRepository = new InMemoryUserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);

  it('should be able to create a user', async () => {
    const user = await createUserUseCase.execute({
      email: 'user@example.com',
      name: 'User Name',
      password: '123456',
    });

    expect(userRepository.users).toHaveLength(1);
    expect(userRepository.users[0]).toEqual(user);
  });
});
