import { constants } from './constants';
import { dataSource } from './data-source';

export const databaseProviders = [
  {
    provide: constants.DATA_SOURCE,
    useFactory: async () => dataSource.initialize(),
  },
];
