"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOwnershipDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ownership_dto_1 = require("./create-ownership.dto");
class UpdateOwnershipDto extends (0, mapped_types_1.PartialType)(create_ownership_dto_1.CreateOwnershipDto) {
}
exports.UpdateOwnershipDto = UpdateOwnershipDto;
//# sourceMappingURL=update-ownership.dto.js.map