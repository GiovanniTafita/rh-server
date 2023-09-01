import { Column, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, Unique } from "typeorm";
import "reflect-metadata";
import BaseModel from "../../models/base.model";
import { TimeSheet } from "../time-sheet/time-sheet.model";
import { Leave } from "../leave/leave.model";

@Entity()
@Unique(['email'])
export class User extends BaseModel {
  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({
    type: 'simple-array',
    default: 'user',
  })
  roles!: string[];

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  birthDate?: Date;

  @Column({ nullable: true, length: 14 })
  tel?: string;

  @Column({ nullable: true })
  function1?: string;

  @Column({ nullable: true })
  solde?: number;

  @OneToMany(() => TimeSheet, (timeSheet) => timeSheet.user)
  timeSheets?: TimeSheet[];

  @OneToMany(() => Leave, (leave) => leave.user)
  leaves?: Leave[];

  @DeleteDateColumn()
  deletedAt?: Date;
}