import { Column, Entity } from "typeorm";
import "reflect-metadata";
import BaseModel from "../../models/base.model";

@Entity()
export class Profile extends BaseModel {
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
}