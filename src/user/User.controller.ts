import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Get()
  getUsers(): string {
    return 'User!';
  }
  @Post()
  createUser() {
    return 'Creating User!';
  }
}
