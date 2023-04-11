import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  async getUsersList(@Req() req: any, @Res() res: any) {
    return res.status(HttpStatus.OK).json(await this.userService.getUsers());
  }

  @Post()
  async createUser(
    @Req() req: any,
    @Body() body: CreateUserDto,
    @Res() res: any,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.createUser(body));
  }

  @Delete('/:id')
  async deleteUser(
    @Req() req: any,
    @Res() res: any,
    @Param('id') userId: string,
  ) {
    const result = await this.userService.deleteUser(userId);
    return res
      .status(result ? HttpStatus.NO_CONTENT : HttpStatus.BAD_REQUEST)
      .json('User not found');
  }

  @Patch('/:id')
  async updateUser(
    @Req() req: any,
    @Body() body: UpdateUserDto,
    @Res() res: any,
    @Param('id') userId: string,
  ) {
    const result = await this.userService.updateUser(userId, body);
    return res
      .status(result ? HttpStatus.OK : HttpStatus.BAD_REQUEST)
      .json(result ? result : 'User not found');
  }
}