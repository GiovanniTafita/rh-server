import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import "reflect-metadata";

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  email?: string;

  @Column()
  password?: string;

  @Column({
    type: 'simple-array',
    default: 'ROLE_USER',
  })
  roles?: string[];

  @CreateDateColumn()
  createdAt?: Date;
}