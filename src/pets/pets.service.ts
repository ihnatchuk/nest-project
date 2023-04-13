import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';

@Injectable()
export class PetsService {
  constructor(private prismaService: PrismaService) {}

  async getPets() {
    return this.prismaService.pets.findMany();
  }

  async getPetById(petId) {
    return this.prismaService.pets.findFirst({
      where: { id: petId },
    });
  }
  async deletePet(petId) {
    const foundUser = await this.prismaService.pets.findFirst({
      where: { id: petId },
    });
    if (!foundUser) return 0;

    return this.prismaService.pets.delete({
      where: { id: petId },
    });
  }

  async updatePet(petId, body) {
    const foundPet = await this.prismaService.pets.findFirst({
      where: { id: petId },
    });
    if (!foundPet) return 0;
    return this.prismaService.pets.update({
      where: { id: petId },
      data: { ...body },
    });
  }
}
