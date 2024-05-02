"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResidentTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_resident_type_dto_1 = require("./create-resident_type.dto");
class UpdateResidentTypeDto extends (0, mapped_types_1.PartialType)(create_resident_type_dto_1.CreateResidentTypeDto) {
}
exports.UpdateResidentTypeDto = UpdateResidentTypeDto;
//# sourceMappingURL=update-resident_type.dto.js.map