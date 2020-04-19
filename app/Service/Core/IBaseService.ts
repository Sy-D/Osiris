/**
 * @description
 * @author Simon Doba
 * @version 1.0
 */
export interface IBaseService<T> {
    getAll(): Promise<T[]>;
    get(id: number): Promise<T>;
    update(entity: T): Promise<T>;
    create(entity: T): Promise<T>;
    delete(id: number): void;
}