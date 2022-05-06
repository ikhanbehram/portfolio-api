import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AboutService } from './About.service';
import { CreateAboutDto } from './dto/About.dto';

@Controller('about')
export class AboutController {
  constructor(private aboutService: AboutService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/:userId')
  createAbout(
    @Body() createAboutDto: CreateAboutDto,
    @Param('userId') id: string,
  ) {
    const payload = {
      fk_userId: id,
      ...createAboutDto,
    };
    return this.aboutService.createAbout(payload);
  }

  @Get('/:userId')
  getUserAbout(@Param('userId') id: string) {
    return this.aboutService.getUserAbout(id);
  }
}
