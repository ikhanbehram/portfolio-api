import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { About, User } from 'src/typeorm';
import { AboutController } from './About.controller';
import { AboutService } from './About.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, About])],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
