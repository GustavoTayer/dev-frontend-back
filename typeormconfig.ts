import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5431,
    username: 'postgres',
    password: '123',
    database: 'lead',
    entities: [],
    synchronize: false,
    autoLoadEntities: true
  };

  module.exports = typeOrmConfig;