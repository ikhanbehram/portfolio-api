import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { About, User } from 'src/typeorm';
import { Repository, getConnection } from 'typeorm';
import { CreateAboutDto } from './dto/About.dto';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private readonly aboutRepository: Repository<About>,
  ) {}

  async createAbout(createAboutDto: CreateAboutDto) {
    const aboutExists = await this.aboutRepository.findOne({
      where: { fk_user_id: createAboutDto.fk_user_id },
    });

    if (aboutExists) {
      const updateAbout = this.aboutRepository.create(aboutExists);
      return this.aboutRepository.save({
        ...updateAbout,
        fk_user_id: createAboutDto.fk_user_id,
        intro: createAboutDto.intro,
        headline: createAboutDto.headline,
      });
    }

    const newAbout = this.aboutRepository.create(createAboutDto);
    return this.aboutRepository.save(newAbout);
  }

  getUserAbout(id: string) {
    return this.aboutRepository.findOne({ where: { fk_user_id: id } });
  }

  async updateUserAbout(id: number, createAboutDto: CreateAboutDto) {
    await getConnection()
      .createQueryBuilder()
      .update(About)
      .set({
        headline: createAboutDto.headline,
        intro: createAboutDto.intro,
      })
      .where('about_id = :id', { id })
      .execute();
    return 'Updated User About';
  }

  deleteUserAbout(id: number) {
    this.aboutRepository.delete(id);
    return 'Deleted User About';
  }
}
