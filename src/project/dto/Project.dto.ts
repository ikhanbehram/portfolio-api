import { MaxLength } from 'class-validator';
import { Skill } from 'src/typeorm';

export class CreateProjectDto {
  project_id: number;
  fk_user_id: string;
  @MaxLength(500)
  title: string;
  @MaxLength(800)
  description: string;
  live_demo_link: string;
  repo_link: string;
  image: any;
  skills: [];
}
