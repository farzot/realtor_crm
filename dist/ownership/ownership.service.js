"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnershipService = void 0;
const common_1 = require("@nestjs/common");
let OwnershipService = class OwnershipService {
    create(createOwnershipDto) {
        return 'This action adds a new ownership';
    }
    findAll() {
        return `This action returns all ownership`;
    }
    findOne(id) {
        return `This action returns a #${id} ownership`;
    }
    update(id, updateOwnershipDto) {
        return `This action updates a #${id} ownership`;
    }
    remove(id) {
        return `This action removes a #${id} ownership`;
    }
};
exports.OwnershipService = OwnershipService;
exports.OwnershipService = OwnershipService = __decorate([
    (0, common_1.Injectable)()
], OwnershipService);
//# sourceMappingURL=ownership.service.js.map