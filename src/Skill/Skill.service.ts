import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from 'src/typeorm';
import { Repository, getConnection } from 'typeorm';
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
      where: { fk_user_id: userId },
    });
  }

  async updateSkill(id: number, createSkillDto: CreateSkillDto) {
    await getConnection()
      .createQueryBuilder()
      .update(Skill)
      .set({
        name: createSkillDto.name,
        skillMeasure: createSkillDto.skillMeasure,
      })
      .where({
        skill_id: id,
      })
      .execute();
    return 'SKILL UPDATED';
  }

  async deleteSkill(id: number) {
    await this.skillRepository.delete(id);
    return 'SKILL DELETED';
  }
}
