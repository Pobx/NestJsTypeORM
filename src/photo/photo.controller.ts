import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  ParseIntPipe,
  Post,
  Put,
  Query,
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

  @Get('by-id')
  async findOne(@Query('id', ParseIntPipe) id: number): Promise<PhotoEntity> {
    return await this.photoService.findOne(id);
  }

  @Post()
  async create(
    @Body(new ValidationPipe()) insertPhotoDto: InsertPhotoDto,
  ): Promise<PhotoEntity> {
    return await this.photoService.insert(insertPhotoDto);
  }

  @Put()
  async update(
    @Query('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updatePhotoDto: UpdatePhotoDto,
  ): Promise<PhotoEntity> {
    return this.photoService.update(id, updatePhotoDto);
  }

  @Delete()
  @HttpCode(204)
  async delete(@Query('id', ParseIntPipe) id: number): Promise<void> {
    await this.photoService.delete(id);
  }
}
