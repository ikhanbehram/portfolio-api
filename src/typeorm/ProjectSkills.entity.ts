import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class projectSkills {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  fk_project_id: number;
  @Column({
    length: 100,
  })
  name: string;
}
