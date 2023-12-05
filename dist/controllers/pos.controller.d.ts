import "reflect-metadata";
import { PosDto } from "../dto/pos.dto";
export declare class PosController {
    private service;
    constructor();
    getAll(): Promise<import("../entites/pos.entity").Pos[]>;
    getOne(id: number): string;
    post(pos: PosDto): Promise<import("../entites/pos.entity").Pos>;
    put(id: number, user: any): string;
    remove(id: number): string;
}
