import { Repository } from "./repositorio";
export declare class PgRepository<T> implements Repository<T> {
    private db;
    constructor();
    getAll(): Promise<T[]>;
    getOne(id: number): Promise<T | null>;
    create(dto: T): Promise<T>;
    update(dto: T, id: number): Promise<T | null>;
    deleted(id: number): Promise<T | null>;
}
