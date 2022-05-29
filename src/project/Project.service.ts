import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project, ProjectSkills, Skill } from 'src/typeorm';
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
    const skills = [];
    project.skills.forEach(async (skill) => {
      const newSkills = new ProjectSkills();
      newSkills.name = skill;
      skills.push(newSkills);
      await this.projectSkillsRepository.save(newSkills);
    });

    const newProject = new Project();
    newProject.title = project.title;
    newProject.description = project.description;
    newProject.fk_user_id = project.fk_user_id;
    newProject.live_demo_link = project.live_demo_link;
    newProject.repo_link = project.repo_link;
    newProject.image = project.image;
    newProject.skills = [...skills];
    const createProject = await this.projectRepository.save(newProject);
    return createProject;
  }

  async getProjects(fk_user_id: string) {
    return this.projectRepository.find({
      where: { fk_user_id },
      relations: ['skills'],
    });
  }
}
