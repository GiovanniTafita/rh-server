import { Column, Entity, ManyToOne } from "typeorm";
import "reflect-metadata";
import BaseModel from "../../models/base.model";
import { User } from "../user/user.model";

@Entity()
export class Leave extends BaseModel {
  @Column({ nullable: true })
  start?: Date;

  @Column({ nullable: true })
  end?: Date;

  @Column({ nullable: true })
  state?: string;

  @Column({ nullable: true })
  approvedAt?: Date;

  @Column({ nullable: true })
  rejectedAt?: Date;

  @Column({ nullable: true })
  managerId?: number;

  @ManyToOne(() => User, (user) => user.leaves)
  user?: User;
}