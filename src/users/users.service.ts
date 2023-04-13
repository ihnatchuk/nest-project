import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { CreateUserDto } from './dto/users.dto';
import { PrismaService } from '../core/orm/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async createUser(userData: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({
      data: { ...userData },
    });
  }
  async getUsers() {
    return this.prismaService.user.findMany();
  }

  async getUserById(userId) {
    return this.prismaService.user.findFirst({
      where: { id: userId },
      include: { pets: true },
    });
  }
  async deleteUser(userId) {
    const foundUser = await this.prismaService.user.findFirst({
      where: { id: userId },
    });
    if (!foundUser) return 0;

    return this.prismaService.user.delete({
      where: { id: userId },
    });
  }

  async updateUser(userId, body) {
    const foundUser = await this.prismaService.user.findFirst({
      where: { id: userId },
    });
    if (!foundUser) return 0;
    return this.prismaService.user.update({
      where: { id: userId },
      data: { ...body },
    });
  }

  async addPet(userId, body) {
    const foundUser = await this.prismaService.user.findFirst({
      where: { id: userId },
    });
    console.log('foundUser', foundUser);
    if (!foundUser) return 0;
    return this.prismaService.pets.create({
      data: { ownerId: userId, ...body },
    });
  }
}
