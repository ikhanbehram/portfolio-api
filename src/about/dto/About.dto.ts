import { MaxLength } from 'class-validator';

export class CreateAboutDto {
  fk_userId: string;

  @MaxLength(800)
  headline: string;

  @MaxLength(400)
  intro: string;
}
