import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../infra/database/prisma/prisma.service';
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService
  ) {}

  async listAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!user)
      throw new NotFoundException(`User not found: ${id}`);

    return user;
  }

  async createUser(data: CreateUserInput): Promise<User> {

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

  async updateUser(id: string, data: UpdateUserInput): Promise<User> {

    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!user)
      throw new BadRequestException('User not found');

    return await this.prisma.user.update({
      where: { id },
      data: {
        ...data
      }
    });
  }

  async deleteUser(id: string) {

    const user = await this.prisma.user.count({
      where: { id }
    });

    if (!user)
      throw new BadRequestException(`User not found to delete`);

    return await this.prisma.user.delete({
      where: { id }
    });
  }

}