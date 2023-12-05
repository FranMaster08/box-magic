"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.data.push(dto);
                resolve(dto);
            });
        });
    }
    update(dto, id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id !== undefined && id < this.data.length) {
                this.data[id] = dto;
                return dto;
            }
            else {
                throw new Error(`Invalid id ${id} for update`);
            }
        });
    }
    deleted(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id < this.data.length) {
                const deletedItem = this.data.splice(id, 1)[0];
                return deletedItem;
            }
            else {
                throw new Error(`Invalid id ${id} for deletion`);
            }
        });
    }
}
exports.LocalRepository = LocalRepository;
//# sourceMappingURL=local.repository.js.map