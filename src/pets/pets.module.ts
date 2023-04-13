import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PrismaService } from '../core/orm/prisma.service';

@Module({
  providers: [PetsService, PrismaService],
})
export class PetsModule {}
