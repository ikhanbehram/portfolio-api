import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  skillId: number;

  @Column({
    nullable: false,
  })
  fk_userId: string;

  @Column({
    length: 50,
  })
  name: string;
  @Column({})
  skillMeasure: number;
}
