import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { jwtConstants } from 'src/auth/auth.constants';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { AuthService } from 'src/auth/servies/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
