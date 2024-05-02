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
exports.BuildingSeriaController = void 0;
const common_1 = require("@nestjs/common");
const building_seria_service_1 = require("./building_seria.service");
const create_building_seria_dto_1 = require("./dto/create-building_seria.dto");
const update_building_seria_dto_1 = require("./dto/update-building_seria.dto");
let BuildingSeriaController = class BuildingSeriaController {
    constructor(buildingSeriaService) {
        this.buildingSeriaService = buildingSeriaService;
    }
    create(createBuildingSeriaDto) {
        return this.buildingSeriaService.create(createBuildingSeriaDto);
    }
    findAll() {
        return this.buildingSeriaService.findAll();
    }
    findOne(id) {
        return this.buildingSeriaService.findOne(+id);
    }
    update(id, updateBuildingSeriaDto) {
        return this.buildingSeriaService.update(+id, updateBuildingSeriaDto);
    }
    remove(id) {
        return this.buildingSeriaService.remove(+id);
    }
};
exports.BuildingSeriaController = BuildingSeriaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_building_seria_dto_1.CreateBuildingSeriaDto]),
    __metadata("design:returntype", void 0)
], BuildingSeriaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuildingSeriaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingSeriaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_building_seria_dto_1.UpdateBuildingSeriaDto]),
    __metadata("design:returntype", void 0)
], BuildingSeriaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingSeriaController.prototype, "remove", null);
exports.BuildingSeriaController = BuildingSeriaController = __decorate([
    (0, common_1.Controller)('building-seria'),
    __metadata("design:paramtypes", [building_seria_service_1.BuildingSeriaService])
], BuildingSeriaController);
//# sourceMappingURL=building_seria.controller.js.map