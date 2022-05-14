import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  fk_user_id: number;
  @Column({
    length: 100,
  })
  title: string;
  @Column({
    length: 400,
  })
  description: string;
  @Column()
  live_demo_link: string;
  @Column()
  repo_link: string;
}
