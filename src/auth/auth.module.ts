import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { UserService } from 'src/user/User.service';
import { jwtConstants } from './auth.constants';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './servies/auth/auth.service';
import { JwtStrategy } from './utils/jwt.strategy';
import { LocalStrategy } from './utils/localStrategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
