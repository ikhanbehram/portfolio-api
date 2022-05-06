import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { About } from 'src/typeorm';
import { AboutController } from './About.controller';
import { AboutService } from './About.service';

@Module({
  imports: [TypeOrmModule.forFeature([About])],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
