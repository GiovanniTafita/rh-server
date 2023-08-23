import { Column, Entity } from "typeorm";
import "reflect-metadata";
import BaseModel from "../../models/base.model";

@Entity()
export class TimeSheet extends BaseModel {
  @Column()
  name?: string;

  @Column({ nullable: true })
  year?: number;

  @Column({ nullable: true })
  startAt?: Date;

  @Column({ nullable: true })
  endAt?: Date;

  @Column({ nullable: true })
  dailyHours?: number;

  @Column({ nullable: true })
  todo?: number;
}