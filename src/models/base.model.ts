import {
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    BaseEntity,
    DeleteDateColumn,
} from 'typeorm';

export default abstract class BaseModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}