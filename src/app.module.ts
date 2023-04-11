import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PetsController } from './pets/pets.controller';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [UsersModule, PetsModule],
  controllers: [AppController, UsersController, PetsController],
  providers: [AppService, UsersService],
})
export class AppModule {}