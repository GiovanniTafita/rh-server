import { Column, Entity, ManyToOne } from "typeorm";
import "reflect-metadata";
import BaseModel from "../../models/base.model";
import { User } from "../user/user.model";
import { Category } from "../category/category.model";

export enum LeaveState {
  pending = 'en attente',
  approved = 'approuvée',
  rejected = 'rejetée'
}
@Entity()
export class Leave extends BaseModel {
  @Column({ nullable: true })
  start?: Date;

  @Column({ nullable: true })
  end?: Date;

  @Column({
    type: 'enum',
    enum: LeaveState,
    default: LeaveState.pending
  })
  status?: LeaveState;

  @Column({ nullable: true })
  approvedAt?: Date;

  @Column({ nullable: true })
  rejectedAt?: Date;

  @Column({ nullable: true })
  message?: string;

  @Column({ nullable: true })
  managerId?: number;

  @ManyToOne(() => Category, (category) => category.leaves,
    {
      eager: true,
    })
  category?: Category;

  @ManyToOne(() => User, (user) => user.leaves)
  user?: User;
}