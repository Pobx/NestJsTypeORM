import { constants } from 'src/database/constants';
import { DataSource } from 'typeorm';
import { Photo } from './photo.entity';

export const photoProviders = [
  {
    provide: constants.PHOTO_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
    inject: [constants.DATA_SOURCE],
  },
];
