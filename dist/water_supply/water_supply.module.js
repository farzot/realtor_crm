"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterSupplyModule = void 0;
const common_1 = require("@nestjs/common");
const water_supply_service_1 = require("./water_supply.service");
const water_supply_controller_1 = require("./water_supply.controller");
let WaterSupplyModule = class WaterSupplyModule {
};
exports.WaterSupplyModule = WaterSupplyModule;
exports.WaterSupplyModule = WaterSupplyModule = __decorate([
    (0, common_1.Module)({
        controllers: [water_supply_controller_1.WaterSupplyController],
        providers: [water_supply_service_1.WaterSupplyService],
    })
], WaterSupplyModule);
//# sourceMappingURL=water_supply.module.js.map