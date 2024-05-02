"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRenovationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_renovation_dto_1 = require("./create-renovation.dto");
class UpdateRenovationDto extends (0, mapped_types_1.PartialType)(create_renovation_dto_1.CreateRenovationDto) {
}
exports.UpdateRenovationDto = UpdateRenovationDto;
//# sourceMappingURL=update-renovation.dto.js.map