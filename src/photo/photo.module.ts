import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PhotoController } from './photo.controller';
import { PhotoData } from './photo.data';
import { photoProviders } from './photo.providers';
import { PhotoService } from './photo.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],
  providers: [
    ...photoProviders,
    { provide: PhotoData, useClass: PhotoService },
  ],
})
export class PhotoModule {}
