import { Admin } from "src/auth/admin.entity";
import { EntityRepository, Repository } from "typeorm";
import { getUserFilterDto } from "./dto/filter-user.dto";
import { regUserDto } from "./dto/register-user.dto";
import { updateUserDetails } from "./dto/update-user.dto";
import { Userreg } from "./registration.entity";

@EntityRepository(Userreg)
export class registerUserRepository extends Repository<Userreg>{
    async registerUser (reguserdto : regUserDto):Promise<Userreg>{
        const {name,age,pincode,state,city,mobileno,emailid,education,address1,address2,address3,pancard,aadhar} = reguserdto;
        const userreg = this.create({
            name,
            age,
            pincode,
            state,
            city,
            mobileno,
            emailid,
            education,
            address1,
            address2,
            address3,
            pancard,
            aadhar,
        });
        await this.save(userreg)
        return userreg
    }

    async getUsers (getUserFilterDto : getUserFilterDto):Promise<Userreg[]>{
        const {search} = getUserFilterDto
        const query = this.createQueryBuilder('user')
        if(search){
            query.andWhere(
                '(LOWER(user.name) LIKE LOWER(:search) OR LOWER(user.mobileno) LIKE LOWER(:search))'
            ,{ search: `%${search}%` },
        )}
        const tasks = await query.getMany();
        return tasks
    }

    async updateUserInfo(user:Userreg, updateuserinfo : updateUserDetails) : Promise<Userreg>{
        const {name,age,pincode,state,city,education,address1,address2,address3} = updateuserinfo
        user.name = name
        user.age = age
        user.pincode = pincode
        user.state = state
        user.city = city
        user.education = education
        user.address1 = address1
        user.address2 = address2
        user.address3 = address3

        await this.save(user)
        return (user)
    }

}