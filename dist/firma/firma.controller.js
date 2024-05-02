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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirmaController = void 0;
const common_1 = require("@nestjs/common");
const firma_service_1 = require("./firma.service");
const create_firma_dto_1 = require("./dto/create-firma.dto");
const update_firma_dto_1 = require("./dto/update-firma.dto");
let FirmaController = class FirmaController {
    constructor(firmaService) {
        this.firmaService = firmaService;
    }
    create(createFirmaDto) {
        return this.firmaService.create(createFirmaDto);
    }
    findAll() {
        return this.firmaService.findAll();
    }
    findOne(id) {
        return this.firmaService.findOne(+id);
    }
    update(id, updateFirmaDto) {
        return this.firmaService.update(+id, updateFirmaDto);
    }
    remove(id) {
        return this.firmaService.remove(+id);
    }
};
exports.FirmaController = FirmaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_firma_dto_1.CreateFirmaDto]),
    __metadata("design:returntype", void 0)
], FirmaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FirmaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FirmaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_firma_dto_1.UpdateFirmaDto]),
    __metadata("design:returntype", void 0)
], FirmaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FirmaController.prototype, "remove", null);
exports.FirmaController = FirmaController = __decorate([
    (0, common_1.Controller)('firma'),
    __metadata("design:paramtypes", [firma_service_1.FirmaService])
], FirmaController);
//# sourceMappingURL=firma.controller.js.map