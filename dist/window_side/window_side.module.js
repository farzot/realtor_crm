"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowSideModule = void 0;
const common_1 = require("@nestjs/common");
const window_side_service_1 = require("./window_side.service");
const window_side_controller_1 = require("./window_side.controller");
let WindowSideModule = class WindowSideModule {
};
exports.WindowSideModule = WindowSideModule;
exports.WindowSideModule = WindowSideModule = __decorate([
    (0, common_1.Module)({
        controllers: [window_side_controller_1.WindowSideController],
        providers: [window_side_service_1.WindowSideService],
    })
], WindowSideModule);
//# sourceMappingURL=window_side.module.js.map