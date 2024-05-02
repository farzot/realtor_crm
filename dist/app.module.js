"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const firma_module_1 = require("./firma/firma.module");
const building_condition_module_1 = require("./building_condition/building_condition.module");
const building_seria_module_1 = require("./building_seria/building_seria.module");
const water_supply_module_1 = require("./water_supply/water_supply.module");
const parking_module_1 = require("./parking/parking.module");
const resident_type_module_1 = require("./resident_type/resident_type.module");
const object_type_module_1 = require("./object_type/object_type.module");
const object_category_module_1 = require("./object_category/object_category.module");
const object_status_module_1 = require("./object_status/object_status.module");
const currency_module_1 = require("./currency/currency.module");
const renovation_module_1 = require("./renovation/renovation.module");
const window_side_module_1 = require("./window_side/window_side.module");
const room_type_module_1 = require("./room_type/room_type.module");
const ownership_module_1 = require("./ownership/ownership.module");
const reason_deleting_module_1 = require("./reason_deleting/reason_deleting.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            prisma_module_1.PrismaModule,
            firma_module_1.FirmaModule,
            building_condition_module_1.BuildingConditionModule,
            building_seria_module_1.BuildingSeriaModule,
            water_supply_module_1.WaterSupplyModule,
            parking_module_1.ParkingModule,
            resident_type_module_1.ResidentTypeModule,
            object_type_module_1.ObjectTypeModule,
            object_category_module_1.ObjectCategoryModule,
            object_status_module_1.ObjectStatusModule,
            currency_module_1.CurrencyModule,
            renovation_module_1.RenovationModule,
            window_side_module_1.WindowSideModule,
            room_type_module_1.RoomTypeModule,
            ownership_module_1.OwnershipModule,
            reason_deleting_module_1.ReasonDeletingModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map