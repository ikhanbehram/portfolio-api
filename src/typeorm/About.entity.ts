import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class About {
  @PrimaryGeneratedColumn()
  about_id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  fk_user_id: string;

  @Column({
    length: 400,
  })
  headline: string;
  @Column({
    length: 800,
  })
  intro: string;
}
