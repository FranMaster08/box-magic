import { Repository } from "./repositorio";
export declare class LocalRepository<T> implements Repository<T> {
    private data;
    constructor();
    getAll(): Promise<T[]>;
    getOne(id: number): Promise<T>;
    create(dto: T): Promise<T>;
    update(dto: T, id?: number): Promise<T>;
    deleted(id: number): Promise<T>;
}
