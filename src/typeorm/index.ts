import { About } from './About.entity';
import { User } from './User.entity';
import { Skill } from './Skill.entity';
import { Project } from './Project.entity';
import { projectSkills } from './ProjectSkills.entity';

const entities = [User, About, Skill, Project, projectSkills];

export { User, About, Skill, Project, projectSkills };

export default entities;
