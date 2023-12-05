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
exports.PosService = void 0;
const local_repository_1 = require("../interfaces/local.repository");
class PosService {
    constructor() {
        this.repository = new local_repository_1.LocalRepository();
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repository.getAll();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    createPos(pos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repository.create(pos);
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.PosService = PosService;
//# sourceMappingURL=pos.service.js.map