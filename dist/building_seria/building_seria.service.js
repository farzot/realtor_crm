"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingSeriaService = void 0;
const common_1 = require("@nestjs/common");
let BuildingSeriaService = class BuildingSeriaService {
    create(createBuildingSeriaDto) {
        return 'This action adds a new buildingSeria';
    }
    findAll() {
        return `This action returns all buildingSeria`;
    }
    findOne(id) {
        return `This action returns a #${id} buildingSeria`;
    }
    update(id, updateBuildingSeriaDto) {
        return `This action updates a #${id} buildingSeria`;
    }
    remove(id) {
        return `This action removes a #${id} buildingSeria`;
    }
};
exports.BuildingSeriaService = BuildingSeriaService;
exports.BuildingSeriaService = BuildingSeriaService = __decorate([
    (0, common_1.Injectable)()
], BuildingSeriaService);
//# sourceMappingURL=building_seria.service.js.map