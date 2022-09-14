import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeormconfig';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'postgres',
      password: '123',
      database: 'lead',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
