import { MaxLength } from 'class-validator';

export class CreateSkillDto {
  fk_userId: string;

  @MaxLength(150)
  name: string;

  @MaxLength(20)
  skillMeasure: number;
}
