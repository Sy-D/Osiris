import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsOptional } from 'class-validator';
import { Exclude } from 'class-transformer';

export class BaseEntity {

    @IsOptional()
    @ObjectIdColumn()
    id: ObjectID;

    @CreateDateColumn()
    createdAt: Date

    @ObjectIdColumn()
    createdBy: ObjectID;

    @UpdateDateColumn()
    updatedAt?: Date

    @ObjectIdColumn()
    updatedBy: ObjectID;

    fromDto(dto?: any) {
        this.id = dto.id;
        this.createdAt = dto.createdAt;
        this.createdBy = dto.createdBy;
    }
}
