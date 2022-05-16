import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import multer from 'multer';
import { Project, ProjectSkills } from 'src/typeorm';
import { ProjectController } from './Project.controller';
import { ProjectService } from './Project.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project, ProjectSkills]),
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
