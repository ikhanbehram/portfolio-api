import { About } from './About.entity';
import { User } from './User.entity';
import { Skill } from './Skill.entity';
import { Project } from './Project.entity';
import { ProjectSkills } from './ProjectSkills.entity';

const entities = [User, About, Skill, Project, ProjectSkills];

export { User, About, Skill, Project, ProjectSkills };

export default entities;
