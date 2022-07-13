import { DataSource } from 'typeorm';
export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'P@ssword1234',
  database: 'test1',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../../migration/*.{ts, js}'],
  synchronize: false,
});
