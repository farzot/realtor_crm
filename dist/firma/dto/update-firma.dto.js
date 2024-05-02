"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFirmaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_firma_dto_1 = require("./create-firma.dto");
class UpdateFirmaDto extends (0, mapped_types_1.PartialType)(create_firma_dto_1.CreateFirmaDto) {
}
exports.UpdateFirmaDto = UpdateFirmaDto;
//# sourceMappingURL=update-firma.dto.js.map