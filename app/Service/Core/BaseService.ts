import { Repository } from 'typeorm';
import { BaseEntity } from '../../domain/model/core/BaseEntity';
import { IBaseService } from './IBaseService';
import { BadGatewayException } from '../../Common/Exceptions/bad-gateway.exception' 

export class BaseService<T extends BaseEntity> implements IBaseService<T>{
    constructor(
        public readonly genericRepository: Repository<T>) { }

    create(entity: any): Promise<T> {
        console.log('BaseService create entity:', entity);
        try {
            return new Promise<T>((resolve, reject) => {
                this.genericRepository.save(entity)
                    .then(created => resolve(created.id))
                    .catch(err => { console.log('BaseService create err:', err), reject(err) })
            })
        }
        catch (error) {
            console.log('BaseService Exception thrown:', error);
            throw new BadGatewayException(error);
        }
    }

    getAll(): Promise<T[]> {
        try {
            return <Promise<T[]>>this.genericRepository.find();
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    get(id: number): Promise<T> {
        try {

        } catch (error) {
            throw new BadGatewayException(error);
        }
        return <Promise<T>>this.genericRepository.findOne(id);
    }

    delete(id: number) {
        try {
            this.genericRepository.delete(id)
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    update(entity: any): Promise<any> {
        console.log('BaseService update entity:', entity)
        if (entity.id === null || entity.id === undefined) {
            console.log('BaseService update is creating..:', entity)
            return this.create(entity);
        } else {
            try {
                return new Promise<any>((resolve, reject) => {
                    this.genericRepository.update(entity.id, entity)
                        .then(response => resolve(response))
                        .catch(err => reject(err))
                });
            } catch (error) {
                throw new BadGatewayException(error);
            }
        }
    }
}
