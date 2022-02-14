import { Userreg } from "src/registration/registration.entity";
import { Column, Entity, PrimaryGeneratedColumn,OneToMany } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({unique:true})
    adminname:string;

    @Column()
    password:string;
}