import { Injectable, NotFoundException } from '@nestjs/common';
import { regUserDto } from './dto/register-user.dto';
import { getUserFilterDto } from './dto/filter-user.dto';
import { registerUserRepository } from './registration.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Userreg } from './registration.entity';
import { updateUserDetails } from './dto/update-user.dto';
import { Admin } from 'src/auth/admin.entity';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(registerUserRepository)
    private taskrepository: registerUserRepository,
  ) {}

  async getUserById(id: string): Promise<Userreg> {
    const found = await this.taskrepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    } else {
      return found;
    }
  }

  getUsers(getUserFilterDto: getUserFilterDto): Promise<Userreg[]> {
    return this.taskrepository.getUsers(getUserFilterDto);
  }

  registerUsers(createUserDto: regUserDto): Promise<Userreg> {
    return this.taskrepository.registerUser(createUserDto);
  }

  async updateUsers(
    id: string,
    updateUserInfo: updateUserDetails,
  ): Promise<Userreg> {
    const users = await this.getUserById(id);
    return this.taskrepository.updateUserInfo(users, updateUserInfo);
  }

  async deleteUserInfo(id: string): Promise<void> {
    const res = await this.taskrepository.delete({ id });
    if (res.affected === 0) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
  }
}
