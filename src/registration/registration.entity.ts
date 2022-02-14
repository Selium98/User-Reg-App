import { Column, Entity, PrimaryGeneratedColumn,ManyToOne} from "typeorm";
import { Exclude } from "class-transformer";
import { Admin } from "src/auth/admin.entity";

@Entity()
export class Userreg {
    //This is the class name used to set the table name in the database 
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @Column()
    age:number;

    @Column()
    pincode:string;

    @Column()
    state:string;

    @Column()
    city:string;

    @Column()
    mobileno:string;

    @Column()
    emailid:string;

    @Column()
    education:string; 

    @Column()
    address1:string;

    @Column({nullable:true})
    address2:string;

    @Column({nullable:true})
    address3:string;
    
    @Column({nullable:true})
    pancard:string;

    @Column({nullable:true})
    aadhar:string;

}