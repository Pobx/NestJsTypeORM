import { InsertPhotoDto } from './insert-photo.dto';
import { UpdatePhotoDto } from './update-photo.dto';

export interface PhotoEntity {
  id: number;
  name: string;
  description: string;
  filename: string;
  filename2: string;
  views: number;
  isPublished: boolean;
}

export abstract class PhotoData {
  abstract findOne(id: number): Promise<PhotoEntity>;
  abstract findAll(): Promise<PhotoEntity[]>;
  abstract insert(entity: InsertPhotoDto): Promise<PhotoEntity>;
  abstract update(id: number, entity: UpdatePhotoDto): Promise<PhotoEntity>;
  abstract delete(id: number): Promise<void>;
}
