import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { authCredentialsDto } from './dto/auth-credentials.dto';
import { AdminRepository } from './admin.repository';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { jwtPayLoad } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AdminRepository)
        private adminrepository : AdminRepository,
        private jwtService : JwtService
    ){}

    async signUp(authcredentails : authCredentialsDto) : Promise<void>{
        return this.adminrepository.createAdmin(authcredentails);
    }
    
    async signIn(authcredentails : authCredentialsDto) :Promise<{accessToken : string}>{
        const { adminname, password } = authcredentails;
        const admin = await this.adminrepository.findOne({adminname})
        if (admin && (await bcrypt.compare(password, admin.password))) {
            const payload : jwtPayLoad = {adminname}
            const accessToken = await this.jwtService.sign(payload)
            return {accessToken}
        }
        else{
            throw new UnauthorizedException('Please check the login credentials')
        }
        
    }
}
