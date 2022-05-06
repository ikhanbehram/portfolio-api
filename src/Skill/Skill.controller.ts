import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateSkillDto } from './dto/Skill.dto';
import { SkillService } from './Skill.service';

@Controller('skill')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/:userId')
  createNewSkill(
    @Body() createSkillDto: CreateSkillDto,
    @Param('userId') id: string,
  ) {
    return this.skillService.createNewSkill({
      ...createSkillDto,
      fk_userId: id,
    });
  }

  @Get('/:userId')
  getSkills(@Param('userId') userId: string) {
    return this.skillService.getSkills(userId);
  }
}
