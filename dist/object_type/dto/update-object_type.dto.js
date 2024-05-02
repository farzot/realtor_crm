"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateObjectTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_object_type_dto_1 = require("./create-object_type.dto");
class UpdateObjectTypeDto extends (0, mapped_types_1.PartialType)(create_object_type_dto_1.CreateObjectTypeDto) {
}
exports.UpdateObjectTypeDto = UpdateObjectTypeDto;
//# sourceMappingURL=update-object_type.dto.js.map