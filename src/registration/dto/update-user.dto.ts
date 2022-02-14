import { IsOptional,Matches } from "class-validator";

export class updateUserDetails {
    @IsOptional()
    name:string;

    @IsOptional()
    age:number;

    @IsOptional()
    pincode:string;

    @IsOptional()
    state:string;

    @IsOptional()
    city:string;
    
    @IsOptional()
    education:string; 

    @IsOptional()
    address1:string;

    @IsOptional()
    address2:string;

    @IsOptional()
    address3:string;
}