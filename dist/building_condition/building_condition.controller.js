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
exports.BuildingConditionController = void 0;
const common_1 = require("@nestjs/common");
const building_condition_service_1 = require("./building_condition.service");
const create_building_condition_dto_1 = require("./dto/create-building_condition.dto");
const update_building_condition_dto_1 = require("./dto/update-building_condition.dto");
let BuildingConditionController = class BuildingConditionController {
    constructor(buildingConditionService) {
        this.buildingConditionService = buildingConditionService;
    }
    create(createBuildingConditionDto) {
        return this.buildingConditionService.create(createBuildingConditionDto);
    }
    findAll() {
        return this.buildingConditionService.findAll();
    }
    findOne(id) {
        return this.buildingConditionService.findOne(+id);
    }
    update(id, updateBuildingConditionDto) {
        return this.buildingConditionService.update(+id, updateBuildingConditionDto);
    }
    remove(id) {
        return this.buildingConditionService.remove(+id);
    }
};
exports.BuildingConditionController = BuildingConditionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_building_condition_dto_1.CreateBuildingConditionDto]),
    __metadata("design:returntype", void 0)
], BuildingConditionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuildingConditionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingConditionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_building_condition_dto_1.UpdateBuildingConditionDto]),
    __metadata("design:returntype", void 0)
], BuildingConditionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingConditionController.prototype, "remove", null);
exports.BuildingConditionController = BuildingConditionController = __decorate([
    (0, common_1.Controller)('building-condition'),
    __metadata("design:paramtypes", [building_condition_service_1.BuildingConditionService])
], BuildingConditionController);
//# sourceMappingURL=building_condition.controller.js.map