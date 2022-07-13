import { Inject, Injectable } from '@nestjs/common';
import { constants } from 'src/database/constants';
import { Repository } from 'typeorm';
import { PhotoData, PhotoEntity } from './photo.data';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService implements PhotoData {
  constructor(
    @Inject(constants.PHOTO_REPOSITORY)
    private photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<PhotoEntity[]> {
    return this.photoRepository.find();
  }

  findOne(id: number): Promise<PhotoEntity> {
    return this.photoRepository.findOne({ where: { id } });
  }
}
