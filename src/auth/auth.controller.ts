import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authCredentialsDto } from './dto/auth-credentials.dto';

@Controller('admin')
export class AuthController {
    constructor(private authService : AuthService){}
    @Post('/signup')
    signUp(@Body() authCredentialsDto : authCredentialsDto) : Promise<void>{
        return this.authService.signUp(authCredentialsDto)
    }

    @Post('/signin')
    signIn(@Body() authCredentialsDto : authCredentialsDto) : Promise<{accessToken : string}>{
        return this.authService.signIn(authCredentialsDto)
    }

}
