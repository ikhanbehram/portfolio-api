import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from './Project.entity';

@Entity()
export class ProjectSkills {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Project, (project) => project.skills)
  @JoinColumn({ name: 'fk_project_id' })
  project: Project;

  @Column({
    length: 100,
  })
  name: string;
}
