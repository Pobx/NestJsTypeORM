import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsertPhotoDto } from './insert-photo.dto';
import { PhotoData, PhotoEntity } from './photo.data';
import { Photo } from './photo.entity';
import { UpdatePhotoDto } from './update-photo.dto';

@Injectable()
export class PhotoService implements PhotoData {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<PhotoEntity[]> {
    return await this.photoRepository.find();
  }

  async findOne(id: number): Promise<PhotoEntity> {
    return await this.photoRepository.findOne({ where: { id } });
  }

  async insert(entity: InsertPhotoDto): Promise<PhotoEntity> {
    await this.photoRepository.insert(entity);
    return entity as PhotoEntity;
  }

  async update(id: number, entity: UpdatePhotoDto): Promise<PhotoEntity> {
    await this.photoRepository.update(id, entity);
    return entity as PhotoEntity;
  }

  async delete(id: number): Promise<void> {
    await this.photoRepository.delete(id);
  }
}
