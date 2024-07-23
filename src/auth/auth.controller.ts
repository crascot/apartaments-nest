import { Body, Controller, Post, Res, UnauthorizedException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from 'src/clients/dto/create-client-dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/login')
  async login(@Body() clientDto: CreateClientDto, @Res() res) {
    const clientToken = await this.authService.login(clientDto);

    if (!clientToken.token) {
      throw new UnauthorizedException('Something went wrong');
    }

    res.cookie('sessionid', clientToken.token, { httpOnly: true });
    return res.send({ message: "Login success" });

    // return this.authService.login(clientDto);
  }

  @Post('/registration')
  async registration(@Body() clientDto: CreateClientDto, @Res() res) {
    const clientToken = await this.authService.registration(clientDto);

    if (!clientToken.token) {
      throw new UnauthorizedException('Something went wrong');
    }

    res.cookie('sessionid', clientToken.token, { httpOnly: true });
    return res.send({ message: "Login success" });

    // return this.authService.registration(clientDto);
  }
}
