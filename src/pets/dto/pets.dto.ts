import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePetDto {
  @ApiProperty({ required: true, example: 'Lucky' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false, example: 'dog' })
  @IsString()
  @IsOptional()
  species: string;

  @ApiProperty({ required: false, example: 'Pomeranian' })
  @IsString()
  @IsOptional()
  breed: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  status: boolean;
}

export class UpdatePetDto {
  @ApiProperty({ required: false, example: 'Lucky' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ required: false, example: 'dog' })
  @IsString()
  @IsOptional()
  species: string;

  @ApiProperty({ required: false, example: 'Pomeranian' })
  @IsString()
  @IsOptional()
  breed: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  status: boolean;
}
