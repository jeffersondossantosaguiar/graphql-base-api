import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../../../../application/entities/user';
import { UserRepository } from '../../../../application/repositories/user.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async listAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async create(user: User): Promise<User> {
    const userAlreadyExists = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (userAlreadyExists) throw new BadRequestException('User already exists');

    return this.prisma.user.create({
      data: {
        ...user,
      },
    });
  }

  findById(userId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
