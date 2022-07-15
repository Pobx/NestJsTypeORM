import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoController } from './photo.controller';
import { PhotoData } from './photo.data';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [PhotoController],
  providers: [{ provide: PhotoData, useClass: PhotoService }],
  exports: [TypeOrmModule],
})
export class PhotoModule {}
