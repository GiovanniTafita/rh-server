import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import "reflect-metadata";
import { Leave } from "../leave/leave.model";

@Entity()
@Unique(['name'])
export class Category {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string

  @OneToMany(() => Leave, (leave) => leave.category)
  leaves?: Leave[];
}