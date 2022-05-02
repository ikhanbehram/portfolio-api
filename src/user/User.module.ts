import { Module } from '@nestjs/common';
import { UserController } from './User.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
