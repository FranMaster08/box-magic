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
exports.PosController = void 0;
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const pos_service_1 = require("../services/pos.service");
const pos_dto_1 = require("../dto/pos.dto");
let PosController = class PosController {
    constructor() {
        this.service = new pos_service_1.PosService();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.findAll();
        });
    }
    getOne(id) {
        return "This action returns user #" + id;
    }
    post(pos) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.createPos(Object.assign({ posId: 1 }, pos));
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
exports.PosController = PosController;
__decorate([
    (0, routing_controllers_1.Get)("/pos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PosController.prototype, "getAll", null);
__decorate([
    (0, routing_controllers_1.Get)("/pos/:id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PosController.prototype, "getOne", null);
__decorate([
    (0, routing_controllers_1.Post)("/pos"),
    __param(0, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pos_dto_1.PosDto]),
    __metadata("design:returntype", Promise)
], PosController.prototype, "post", null);
__decorate([
    (0, routing_controllers_1.Put)("/pos/:id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __param(1, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PosController.prototype, "put", null);
__decorate([
    (0, routing_controllers_1.Delete)("/pos/:id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PosController.prototype, "remove", null);
exports.PosController = PosController = __decorate([
    (0, routing_controllers_1.JsonController)(),
    __metadata("design:paramtypes", [])
], PosController);
//# sourceMappingURL=pos.controller.js.map