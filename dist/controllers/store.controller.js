"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.StoreController = void 0;
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const store_service_1 = require("../services/store.service");
const store_dto_1 = require("../dto/store.dto");
let StoreController = class StoreController {
    constructor() {
        this.service = new store_service_1.StoreService();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.findAll();
        });
    }
    getOne(id) {
        return "This action returns user #" + id;
    }
    post(store) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.createStore(Object.assign({ id: "1" }, store));
            console.log(response);
            return response;
        });
    }
    put(id, user) {
        return "Updating a user...";
    }
    remove(id) {
        return "Removing user...";
    }
};
exports.StoreController = StoreController;
__decorate([
    (0, routing_controllers_1.Get)("/stors"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getAll", null);
__decorate([
    (0, routing_controllers_1.Get)("/stors/:id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StoreController.prototype, "getOne", null);
__decorate([
    (0, routing_controllers_1.Post)("/stors"),
    __param(0, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_dto_1.StoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "post", null);
__decorate([
    (0, routing_controllers_1.Put)("/stors/:id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __param(1, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], StoreController.prototype, "put", null);
__decorate([
    (0, routing_controllers_1.Delete)("/stors/:id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StoreController.prototype, "remove", null);
exports.StoreController = StoreController = __decorate([
    (0, routing_controllers_1.JsonController)(),
    __metadata("design:paramtypes", [])
], StoreController);
//# sourceMappingURL=store.controller.js.map