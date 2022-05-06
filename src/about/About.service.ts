import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { About, User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateAboutDto } from './dto/About.dto';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private readonly aboutRepository: Repository<About>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createAbout(createAboutDto: CreateAboutDto) {
    const newAbout = this.aboutRepository.create({ ...createAboutDto });
    return this.aboutRepository.save(newAbout);
  }

  getUserAbout(id: string) {
    return this.aboutRepository.findOne({ where: { fk_userId: id } });
  }
}
