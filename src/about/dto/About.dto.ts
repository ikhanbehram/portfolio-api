import { MaxLength } from 'class-validator';

export class CreateAboutDto {
  about_id: number;
  fk_user_id: string;

  @MaxLength(800)
  headline: string;

  @MaxLength(400)
  intro: string;
}
