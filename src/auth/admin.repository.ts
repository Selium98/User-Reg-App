import {ConflictException,InternalServerErrorException,} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { authCredentialsDto } from './dto/auth-credentials.dto';
import { Admin } from './admin.entity';
import * as bcrypt from 'bcrypt'

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  async createAdmin(authcredentialdto: authCredentialsDto): Promise<void> {
    const { adminname, password } = authcredentialdto;
    const salt = await bcrypt.genSalt();
    const hashedpass = await bcrypt.hash(password,salt)
    const admin = this.create({ adminname, password : hashedpass});
    try {
      await this.save(admin);
    } catch (error) {
      if (error.code === '23505') {
        //duplicate entry code
        throw new ConflictException('Adminname already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
