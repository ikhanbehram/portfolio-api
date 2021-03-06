import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  skill_id: number;

  @Column({
    nullable: false,
  })
  fk_user_id: string;

  @Column({
    length: 200,
  })
  name: string;
  @Column({})
  skillMeasure: number;
}
