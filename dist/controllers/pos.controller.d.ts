import "reflect-metadata";
import { StoreDto } from "../dto/store.dto";
export declare class UserController {
    private service;
    constructor();
    getAll(): Promise<import("../entites/store.entity").Store[]>;
    getOne(id: number): string;
    post(store: StoreDto): Promise<import("../entites/store.entity").Store>;
    put(id: number, user: any): string;
    remove(id: number): string;
}
