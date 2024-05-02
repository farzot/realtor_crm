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
exports.RenovationController = void 0;
const common_1 = require("@nestjs/common");
const renovation_service_1 = require("./renovation.service");
const create_renovation_dto_1 = require("./dto/create-renovation.dto");
const update_renovation_dto_1 = require("./dto/update-renovation.dto");
let RenovationController = class RenovationController {
    constructor(renovationService) {
        this.renovationService = renovationService;
    }
    create(createRenovationDto) {
        return this.renovationService.create(createRenovationDto);
    }
    findAll() {
        return this.renovationService.findAll();
    }
    findOne(id) {
        return this.renovationService.findOne(+id);
    }
    update(id, updateRenovationDto) {
        return this.renovationService.update(+id, updateRenovationDto);
    }
    remove(id) {
        return this.renovationService.remove(+id);
    }
};
exports.RenovationController = RenovationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_renovation_dto_1.CreateRenovationDto]),
    __metadata("design:returntype", void 0)
], RenovationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RenovationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RenovationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_renovation_dto_1.UpdateRenovationDto]),
    __metadata("design:returntype", void 0)
], RenovationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RenovationController.prototype, "remove", null);
exports.RenovationController = RenovationController = __decorate([
    (0, common_1.Controller)('renovation'),
    __metadata("design:paramtypes", [renovation_service_1.RenovationService])
], RenovationController);
//# sourceMappingURL=renovation.controller.js.map