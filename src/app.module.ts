import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'yash11',
      database: 'user-auth-reg-nestjs',
      autoLoadEntities: true,
      synchronize: true,
    }), 
    RegistrationModule]
})
export class AppModule {}
