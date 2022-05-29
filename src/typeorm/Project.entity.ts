import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectSkills } from './ProjectSkills.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column({
    nullable: false,
  })
  fk_user_id: string;
  @Column({
    length: 100,
  })
  title: string;
  @Column({
    length: 400,
  })
  description: string;
  @Column()
  live_demo_link: string;
  @Column()
  repo_link: string;
  @Column()
  image: string;

  @OneToMany(
    (type) => ProjectSkills,
    (projectSkills) => projectSkills.project,
    {
      cascade: true,
    },
  )
  skills: ProjectSkills[];
}
