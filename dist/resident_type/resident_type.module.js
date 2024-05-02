"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidentTypeModule = void 0;
const common_1 = require("@nestjs/common");
const resident_type_service_1 = require("./resident_type.service");
const resident_type_controller_1 = require("./resident_type.controller");
let ResidentTypeModule = class ResidentTypeModule {
};
exports.ResidentTypeModule = ResidentTypeModule;
exports.ResidentTypeModule = ResidentTypeModule = __decorate([
    (0, common_1.Module)({
        controllers: [resident_type_controller_1.ResidentTypeController],
        providers: [resident_type_service_1.ResidentTypeService],
    })
], ResidentTypeModule);
//# sourceMappingURL=resident_type.module.js.map