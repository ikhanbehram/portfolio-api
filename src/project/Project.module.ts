import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project, projectSkills } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Project, projectSkills])],
  controllers: [],
  providers: [],
})
export class ProjectModule {}
