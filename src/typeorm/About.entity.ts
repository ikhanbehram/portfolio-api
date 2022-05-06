import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class About {
  @PrimaryGeneratedColumn()
  aboutId: number;

  @Column({
    nullable: false,
    unique: true,
  })
  fk_userId: string;
  @Column({
    nullable: false,
  })
  @Column({
    length: 400,
  })
  headline: string;
  @Column({
    length: 800,
  })
  intro: string;
}
