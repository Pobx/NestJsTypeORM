import { Controller, Get } from '@nestjs/common';
import { PhotoData } from './photo.data';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoData) {}

  @Get()
  async findAll(): Promise<Photo[]> {
    return await this.photoService.findAll();
  }
}
