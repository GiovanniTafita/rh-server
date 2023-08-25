import { Column, Entity, JoinColumn, OneToMany, OneToOne, Unique } from "typeorm";
import "reflect-metadata";
import BaseModel from "../../models/base.model";
import { Profile } from "../profile/profile.model";
import { TimeSheet } from "../time-sheet/time-sheet.model";

@Entity()
@Unique(['email'])
export class User extends BaseModel {
  @Column()
  email?: string;

  @Column()
  password?: string;

  @Column({
    default: 'USER',
  })
  roles?: string;

  @OneToOne(() => Profile, {
    eager: true,
    cascade: true
  })
  @JoinColumn()
  profile?: Profile;

  @OneToMany(() => TimeSheet, (timeSheet) => timeSheet.user)
  timeSheets?: TimeSheet[]
}