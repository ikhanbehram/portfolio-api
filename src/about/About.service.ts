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

  async createAbout(createAboutDto: CreateAboutDto) {
    const aboutExists = await this.aboutRepository.findOne({
      where: { fk_userId: createAboutDto.fk_userId },
    });

    if (aboutExists) {
      const updateAbout = this.aboutRepository.create(aboutExists);
      return this.aboutRepository.save({
        ...updateAbout,
        fk_userId: createAboutDto.fk_userId,
        intro: createAboutDto.intro,
        headline: createAboutDto.headline,
      });
    }

    const newAbout = this.aboutRepository.create(createAboutDto);
    return this.aboutRepository.save(newAbout);
  }

  getUserAbout(id: string) {
    return this.aboutRepository.findOne({ where: { fk_userId: id } });
  }
}
