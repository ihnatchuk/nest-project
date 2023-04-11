import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { v4 as myUuid } from 'uuid';

@Injectable()
export class UsersService {
  private users: any = [];
  async createUser(userData: CreateUserDto) {
    const _id = myUuid();
    this.users.push({ ...userData, _id });
    return this.users[this.users.length - 1];
  }
  async getUsers() {
    return this.users;
  }

  async deleteUser(userId) {
    const foundUserIndex = this.users.findIndex((user) => user._id === userId);
    if (foundUserIndex === -1) {
      return 0;
    }
    this.users.splice(foundUserIndex, 1);
    return 1;
  }

  async updateUser(userId, body) {
    const foundUserIndex = this.users.findIndex((user) => user._id === userId);
    if (foundUserIndex === -1) {
      return 0;
    }
    console.log(this.users.slice(foundUserIndex, 1));
    console.log(body);
    this.users[foundUserIndex] = {
      ...this.users.slice(foundUserIndex, 1)[0],
      ...body,
    };
    return this.users[foundUserIndex];
  }
}
