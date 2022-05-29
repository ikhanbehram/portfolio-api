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
import { AboutService } from './About.service';
import { CreateAboutDto } from './dto/About.dto';

@Controller('about')
export class AboutController {
  constructor(private aboutService: AboutService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createAbout(@Body() createAboutDto: CreateAboutDto, @Req() req) {
    const payload = {
      fk_user_id: req.user.username,
      ...createAboutDto,
    };
    return this.aboutService.createAbout(payload);
  }

  @Get('/:userId')
  getUserAbout(@Param('userId') id: string) {
    return this.aboutService.getUserAbout(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:aboutId')
  updateAbout(
    @Param('aboutId') id: number,
    @Body() createAboutDto: CreateAboutDto,
  ) {
    return this.aboutService.updateUserAbout(id, createAboutDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:aboutId')
  deleteAbout(@Param('aboutId') id: number) {
    return this.aboutService.deleteUserAbout(id);
  }
}
