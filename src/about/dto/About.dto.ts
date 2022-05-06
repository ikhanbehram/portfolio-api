import { MaxLength } from 'class-validator';

export class CreateAboutDto {
  @MaxLength(800)
  headline: string;

  @MaxLength(400)
  intro: string;
}
