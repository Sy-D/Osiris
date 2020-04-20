import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsOptional, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { BaseEntityWithLogicDelete } from './Core/BaseEntityWithLogicDelete';

/**
 * Used for MessageEmbed
 * TODO: MessageEmbed object in our model
 * https://discord.js.org/#/docs/main/stable/class/MessageEmbed
 */
export class MessageTemplate extends BaseEntityWithLogicDelete {

    @IsOptional()
    @ObjectIdColumn()
    id: ObjectID;

    @IsString()
    type: string;

    @IsString()
    name: string;
 
    @IsString()
    title: string;

    @IsString()
    body: string;

    @IsString()
    url: string;
}
