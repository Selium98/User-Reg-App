import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { registerUserRepository } from './registration.repository';
import { userService } from './registration.service';

@Module({
  imports: [TypeOrmModule.forFeature([registerUserRepository]) ],
  controllers: [RegistrationController],
  providers: [userService],
})
export class RegistrationModule {}
