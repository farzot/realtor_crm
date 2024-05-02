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
exports.WaterSupplyController = void 0;
const common_1 = require("@nestjs/common");
const water_supply_service_1 = require("./water_supply.service");
const create_water_supply_dto_1 = require("./dto/create-water_supply.dto");
const update_water_supply_dto_1 = require("./dto/update-water_supply.dto");
let WaterSupplyController = class WaterSupplyController {
    constructor(waterSupplyService) {
        this.waterSupplyService = waterSupplyService;
    }
    create(createWaterSupplyDto) {
        return this.waterSupplyService.create(createWaterSupplyDto);
    }
    findAll() {
        return this.waterSupplyService.findAll();
    }
    findOne(id) {
        return this.waterSupplyService.findOne(+id);
    }
    update(id, updateWaterSupplyDto) {
        return this.waterSupplyService.update(+id, updateWaterSupplyDto);
    }
    remove(id) {
        return this.waterSupplyService.remove(+id);
    }
};
exports.WaterSupplyController = WaterSupplyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_water_supply_dto_1.CreateWaterSupplyDto]),
    __metadata("design:returntype", void 0)
], WaterSupplyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WaterSupplyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WaterSupplyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_water_supply_dto_1.UpdateWaterSupplyDto]),
    __metadata("design:returntype", void 0)
], WaterSupplyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WaterSupplyController.prototype, "remove", null);
exports.WaterSupplyController = WaterSupplyController = __decorate([
    (0, common_1.Controller)('water-supply'),
    __metadata("design:paramtypes", [water_supply_service_1.WaterSupplyService])
], WaterSupplyController);
//# sourceMappingURL=water_supply.controller.js.map