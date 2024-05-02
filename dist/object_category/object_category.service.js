"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectCategoryService = void 0;
const common_1 = require("@nestjs/common");
let ObjectCategoryService = class ObjectCategoryService {
    create(createObjectCategoryDto) {
        return 'This action adds a new objectCategory';
    }
    findAll() {
        return `This action returns all objectCategory`;
    }
    findOne(id) {
        return `This action returns a #${id} objectCategory`;
    }
    update(id, updateObjectCategoryDto) {
        return `This action updates a #${id} objectCategory`;
    }
    remove(id) {
        return `This action removes a #${id} objectCategory`;
    }
};
exports.ObjectCategoryService = ObjectCategoryService;
exports.ObjectCategoryService = ObjectCategoryService = __decorate([
    (0, common_1.Injectable)()
], ObjectCategoryService);
//# sourceMappingURL=object_category.service.js.map