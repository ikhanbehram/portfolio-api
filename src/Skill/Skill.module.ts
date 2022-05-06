import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from 'src/typeorm';
import { SkillController } from './Skill.controller';
import { SkillService } from './Skill.service';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  controllers: [SkillController],
  providers: [SkillService],
})
export class SkillModule {}
