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
}
