"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalRepository = void 0;
class LocalRepository {
    constructor() {
        this.data = [];
    }
    getAll() {
        return Promise.resolve(this.data);
    }
    getOne(id) {
        return new Promise((resolve, reject) => {
            try {
                const item = this.data.find((item, index) => index === id);
                if (item) {
                    resolve(item);
                }
                else {
                    throw "No se encontro data";
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    async create(dto) {
        return new Promise((resolve, reject) => {
            this.data.push(dto);
            resolve(dto);
        });
    }
    async update(dto, id) {
        if (id !== undefined && id < this.data.length) {
            this.data[id] = dto;
            return dto;
        }
        else {
            throw new Error(`Invalid id ${id} for update`);
        }
    }
    async deleted(id) {
        if (id < this.data.length) {
            const deletedItem = this.data.splice(id, 1)[0];
            return deletedItem;
        }
        else {
            throw new Error(`Invalid id ${id} for deletion`);
        }
    }
}
exports.LocalRepository = LocalRepository;
//# sourceMappingURL=local.repository.js.map