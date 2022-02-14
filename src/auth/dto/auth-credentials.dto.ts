import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class authCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(10)
    adminname : string;

    @IsString()
    @MinLength(8)
    @MaxLength(16)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ , {message:"Password is weak"})
    password:string
}