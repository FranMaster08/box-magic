"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const PgRepository_1 = require("../interfaces/PgRepository");
class StoreService {
    constructor() {
        this.repository = new PgRepository_1.PgRepository();
    }
    async findAll() {
        try {
            const response = await this.repository.getAll();
            return response;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async createStore(store) {
        try {
            const response = await this.repository.create(store);
            return response;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map