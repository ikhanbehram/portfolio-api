import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/Skill.dto';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,
  ) {}

  async createNewSkill(createSkillDto: CreateSkillDto) {
    const skillCount = await this.skillRepository.count();
    if (skillCount >= 25) {
      throw new HttpException(
        'Buy Premium To Add 25+ Skills',
        HttpStatus.FORBIDDEN,
      );
    }
    const newSkill = this.skillRepository.create(createSkillDto);
    return this.skillRepository.save(newSkill);
  }

  async getSkills(userId: string) {
    return this.skillRepository.find({
      where: { fk_userId: userId },
    });
  }

  async updateSkill() {
    return 'UPDATING SKILL';
  }

  async deleteSkill() {
    return 'DELETING SKILL';
  }
}
