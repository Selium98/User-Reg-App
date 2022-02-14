import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: 'abc123', signOptions: { expiresIn: 3600 } }),
    TypeOrmModule.forFeature([AdminRepository]),
  ],
  providers: [AuthService, jwtStrategy],
  controllers: [AuthController],
  exports:[jwtStrategy, PassportModule]
})
export class AuthModule {}
