"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWaterSupplyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_water_supply_dto_1 = require("./create-water_supply.dto");
class UpdateWaterSupplyDto extends (0, mapped_types_1.PartialType)(create_water_supply_dto_1.CreateWaterSupplyDto) {
}
exports.UpdateWaterSupplyDto = UpdateWaterSupplyDto;
//# sourceMappingURL=update-water_supply.dto.js.map