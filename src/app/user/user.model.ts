import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import "reflect-metadata";
import BaseModel from "../../models/base.model";

@Entity()
@Unique(['email'])
export class User extends BaseModel {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'simple-array',
    default: 'USER',
  })
  roles: string[];
}