import { IsEnum, IsOptional, IsString } from "class-validator";

export class getUserFilterDto{
    @IsOptional()
    name? : string
    
    @IsOptional()
    @IsString()
    search? : string;
}