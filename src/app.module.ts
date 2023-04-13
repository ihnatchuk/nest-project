import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PetsController } from './pets/pets.controller';
import { PetsModule } from './pets/pets.module';
import { PrismaService } from './core/orm/prisma.service';
import { PetsService } from './pets/pets.service';

@Module({
  imports: [UsersModule, PetsModule],
  controllers: [AppController, UsersController, PetsController],
  providers: [AppService, UsersService, PetsService, PrismaService],
})
export class AppModule {}
