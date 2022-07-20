import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../infra/database/prisma/prisma.service';
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService
  ) {}

  listAllUsers() {
    return this.prisma.user.findMany();
  }

  getUserById(id: string) {
    const user = this.prisma.user.findUnique({
      where: {
        id
      }
    });

    if (!user)
      throw new NotFoundException(`User not found: ${id}`);

    return user;
  }

  async createUser(data: CreateUserInput) {

    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    });

    if (user)
      throw new BadRequestException('User already exists');

    return this.prisma.user.create({
      data: {
        ...data
      }
    });

  }

  async updateUser(id: string, data: UpdateUserInput) {

    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });

    if (!user)
      throw new BadRequestException('User not found');

    return await this.prisma.user.update({
      where: {
        id
      },
      data: {
        ...data
      }
    });
  }

}