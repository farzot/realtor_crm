"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenovationModule = void 0;
const common_1 = require("@nestjs/common");
const renovation_service_1 = require("./renovation.service");
const renovation_controller_1 = require("./renovation.controller");
let RenovationModule = class RenovationModule {
};
exports.RenovationModule = RenovationModule;
exports.RenovationModule = RenovationModule = __decorate([
    (0, common_1.Module)({
        controllers: [renovation_controller_1.RenovationController],
        providers: [renovation_service_1.RenovationService],
    })
], RenovationModule);
//# sourceMappingURL=renovation.module.js.map