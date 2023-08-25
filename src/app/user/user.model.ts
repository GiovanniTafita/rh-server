import { Column, Entity, JoinColumn, OneToOne, Unique } from "typeorm";
import "reflect-metadata";
import BaseModel from "../../models/base.model";
import { Profile } from "../profile/profile.model";

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
}