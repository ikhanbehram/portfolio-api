import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Connection from 'mysql2/typings/mysql/lib/Connection';
import { map } from 'rxjs';
import { Project, ProjectSkills } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/Project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(ProjectSkills)
    private readonly projectSkillsRepository: Repository<ProjectSkills>,
  ) {}

  async createProject(project: CreateProjectDto) {
    const skills = project.skills.map((skill) => {
      return {
        name: skill,
      };
    });

    const projectDetails = {
      title: project.title,
      description: project.description,
      fk_user_id: project.fk_user_id,
      live_demo_link: project.live_demo_link,
      repo_link: project.repo_link,
      image: project.image,
    };

    const newProject = this.projectRepository.create(projectDetails);
    return await this.projectRepository.save(newProject);
  }

  async getProjects(fk_user_id: string) {
    return this.projectRepository.find({
      where: { fk_user_id },
    });
  }
}
