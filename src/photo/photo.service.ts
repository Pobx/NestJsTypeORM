import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoData, PhotoEntity } from './photo.data';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService implements PhotoData {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  findAll(): Promise<PhotoEntity[]> {
    return this.photoRepository.find();
  }

  findOne(id: number): Promise<PhotoEntity> {
    return this.photoRepository.findOne({ where: { id } });
  }
}
