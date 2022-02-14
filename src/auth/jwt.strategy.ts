import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtPayLoad } from "./jwt-payload.interface";
import { Admin } from "./admin.entity";
import { AdminRepository } from "./admin.repository";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(AdminRepository)
        private adminrepository : AdminRepository
    ){super({
        secretOrKey: 'abc123',
        jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    })}

    async validate(payload : jwtPayLoad):Promise<Admin>{
        const {adminname} = payload
        const admin:Admin = await this.adminrepository.findOne({adminname})
        if(!admin){
            throw new UnauthorizedException()
        }
        return admin;
    }
}   