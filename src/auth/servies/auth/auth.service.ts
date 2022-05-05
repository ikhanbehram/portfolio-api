import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/User.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUserName(username);
    if (userDB) {
      const matched = comparePasswords(password, userDB.password);
      if (matched) {
        return userDB;
      } else {
        return null;
      }
    }
    return null;
  }
}
