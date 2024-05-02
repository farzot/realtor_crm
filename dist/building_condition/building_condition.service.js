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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingConditionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BuildingConditionService = class BuildingConditionService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createBuildingConditionDto) {
        return this.prismaService.buildingCondition(createBuildingConditionDto);
    }
    findAll() {
        return this.prismaService.buildingCondition.findMany({
            include: {
                Object: true,
            },
        });
    }
    async findOne(id) {
        return this.prismaService.buildingCondition.findUnique({ where: { id } });
    }
    async update(id, updateBuildingConditionDto) {
        return await this.prismaService.buildingCondition.update({
            where: { id },
            updateBuildingConditionDto,
        });
    }
    async remove(id) {
        return this.prismaService.buildingCondition.delete({ where: { id } });
    }
};
exports.BuildingConditionService = BuildingConditionService;
exports.BuildingConditionService = BuildingConditionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BuildingConditionService);
//# sourceMappingURL=building_condition.service.js.map