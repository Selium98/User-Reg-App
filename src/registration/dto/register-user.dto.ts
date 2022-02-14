import {IsEmail, IsNotEmpty, IsOptional, Matches} from "class-validator";

export class regUserDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    age:number;

    @IsNotEmpty()
    pincode:string;

    @IsNotEmpty()
    state:string;

    @IsNotEmpty()
    city:string;

    @IsNotEmpty()
    @Matches(/^[6-9]\d{9}$/, {message :"Please check the phone number again"})
    mobileno:string;

    @IsNotEmpty()
    @IsEmail()
    emailid:string;

    @IsNotEmpty()
    education:string; 

    @IsNotEmpty()
    address1:string;

    @IsOptional()
    address2:string;

    @IsOptional()
    address3:string;

    @IsOptional()
    @Matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, {message :"Please check the pan card number again"})
    pancard:string;

    @IsOptional()
    @Matches(/[2-9]{1}[0-9]{11}/, {message :"Please check the aadhar number again"})
    aadhar:string;

}