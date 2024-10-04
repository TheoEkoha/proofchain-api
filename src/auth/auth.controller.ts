import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { address: string; signature: string }) {
    console.log("ok")
    return this.authService.login(body.address, body.signature);
  }
}
