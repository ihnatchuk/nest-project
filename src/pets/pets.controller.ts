import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Req,
  Res,
} from '@nestjs/common';
import { UpdatePetDto } from './dto/pets.dto';
import { PetsService } from './pets.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petService: PetsService) {}
  @Get()
  async getPetsList(@Req() req: any, @Res() res: any) {
    return res.status(HttpStatus.OK).json(await this.petService.getPets());
  }

  @Get('/:id')
  async getPetInfo(
    @Req() req: any,
    @Res() res: any,
    @Param('id') petId: string,
  ) {
    const result = await this.petService.getPetById(petId);
    return res
      .status(result ? HttpStatus.OK : HttpStatus.BAD_REQUEST)
      .json(result ? result : 'Pet not found');
  }

  @Delete('/:id')
  async deleteUser(
    @Req() req: any,
    @Res() res: any,
    @Param('id') petId: string,
  ) {
    const result = await this.petService.deletePet(petId);
    return res
      .status(result ? HttpStatus.NO_CONTENT : HttpStatus.BAD_REQUEST)
      .json('Pet not found');
  }

  @Patch('/:id')
  async updateUser(
    @Req() req: any,
    @Body() body: UpdatePetDto,
    @Res() res: any,
    @Param('id') petId: string,
  ) {
    const result = await this.petService.updatePet(petId, body);
    return res
      .status(result ? HttpStatus.OK : HttpStatus.BAD_REQUEST)
      .json(result ? result : 'Pet not found');
  }
}
