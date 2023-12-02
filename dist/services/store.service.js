"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const local_repository_1 = require("../interfaces/local.repository");
class StoreService {
    constructor() {
        this.repository = new local_repository_1.LocalRepository();
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