import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project, ProjectSkills, Skill } from 'src/typeorm';
import { getConnection, Repository } from 'typeorm';
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

  async updateProject(id: number, project: CreateProjectDto) {
    return await getConnection().createQueryBuilder().update(Project).set({
      title: project.title,
      description: project.description,
      live_demo_link: project.live_demo_link,
      repo_link: project.repo_link,
      image: project.image,
    });
  }

  async deleteProject(id: number) {
    return await this.projectRepository.delete(id);
  }
}
