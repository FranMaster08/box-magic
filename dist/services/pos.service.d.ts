import { Pos } from "../entites/pos.entity";
export declare class PosService {
    private repository;
    constructor();
    findAll(): Promise<Pos[]>;
    createPos(pos: Pos): Promise<Pos>;
}
