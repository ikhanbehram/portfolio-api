import { MaxLength } from 'class-validator';

export class CreateSkillDto {
  fk_user_id: string;

  @MaxLength(2000)
  name: string;

  @MaxLength(20)
  skillMeasure: number;
}
