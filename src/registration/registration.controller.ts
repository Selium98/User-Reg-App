import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { userService } from './registration.service';
import { regUserDto } from './dto/register-user.dto';
import { getUserFilterDto } from './dto/filter-user.dto';
import { updateUserDetails } from './dto/update-user.dto';
import { Userreg } from './registration.entity';

@Controller('user')
export class RegistrationController {
    constructor(private userservice: userService) {}
    
    @Get()
    getUsers(@Query() getUserFilterDto : getUserFilterDto):Promise<Userreg[]> {
        return this.userservice.getUsers(getUserFilterDto)
    }

    @Get('/:id')
    getUserById(@Param('id') id: string):Promise<Userreg>{
        return this.userservice.getUserById(id)
    }

    @Post()
    createTask (@Body() createUserDto:regUserDto):Promise<Userreg>{
        return this.userservice.registerUsers(createUserDto)
    }

    @Patch('/:id/')
    updateUserInfo(@Param('id') id:string,@Body() updateuserinfo: updateUserDetails):Promise<Userreg>{
        return this.userservice.updateUsers(id,updateuserinfo)
    }

    @Delete('/:id')
        deleteUser(@Param('id') id:string):Promise<void>{
        return this.userservice.deleteUserInfo(id)
    }
}
