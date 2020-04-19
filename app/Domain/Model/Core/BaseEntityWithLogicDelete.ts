import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Exclude } from 'class-transformer';

export class BaseEntityWithLogicDelete extends BaseEntity {

    @Exclude()
    @Column()
    isDeleted: boolean;
}