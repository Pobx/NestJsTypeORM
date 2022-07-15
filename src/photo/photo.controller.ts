import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { InsertPhotoDto } from './insert-photo.dto';
import { PhotoData, PhotoEntity } from './photo.data';
import { Photo } from './photo.entity';
import { UpdatePhotoDto } from './update-photo.dto';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoData) {}

  @Get()
  async findAll(): Promise<Photo[]> {
    return await this.photoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PhotoEntity> {
    return await this.photoService.findOne(id);
  }

  @Post()
  async create(
    @Body(new ValidationPipe()) insertPhotoDto: InsertPhotoDto,
  ): Promise<PhotoEntity> {
    return await this.photoService.insert(insertPhotoDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id,
    @Body(new ValidationPipe()) updatePhotoDto: UpdatePhotoDto,
  ): Promise<PhotoEntity> {
    return this.photoService.update(id, updatePhotoDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id', ParseIntPipe) id): Promise<void> {
    await this.photoService.delete(id);
  }
}
