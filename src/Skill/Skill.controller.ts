import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateSkillDto } from './dto/Skill.dto';
import { SkillService } from './Skill.service';

@Controller('skill')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createNewSkill(@Body() createSkillDto: CreateSkillDto, @Req() req) {
    return this.skillService.createNewSkill({
      ...createSkillDto,
      fk_user_id: req.user.username,
    });
  }

  @Get('/:userId')
  getSkills(@Param('userId') userId: string) {
    return this.skillService.getSkills(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:skillId')
  updateSkill(
    @Param('skillId') id: number,
    @Body() createSkillDto: CreateSkillDto,
  ) {
    return this.skillService.updateSkill(id, createSkillDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:skillId')
  deleteSkill(@Param('skillId') id: number) {
    this.skillService.deleteSkill(id);
  }
}
