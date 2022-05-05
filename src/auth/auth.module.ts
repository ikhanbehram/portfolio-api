import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { UserService } from 'src/user/User.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './servies/auth/auth.service';
import { LocalStrategy } from './utils/localStrategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy],
})
export class AuthModule {}
