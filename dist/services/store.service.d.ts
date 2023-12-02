import { Store } from "../entites/store.entity";
export declare class StoreService {
    private repository;
    constructor();
    findAll(): Promise<Store[]>;
    createStore(store: Store): Promise<Store>;
}
