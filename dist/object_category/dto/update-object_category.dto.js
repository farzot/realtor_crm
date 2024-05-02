"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateObjectCategoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_object_category_dto_1 = require("./create-object_category.dto");
class UpdateObjectCategoryDto extends (0, mapped_types_1.PartialType)(create_object_category_dto_1.CreateObjectCategoryDto) {
}
exports.UpdateObjectCategoryDto = UpdateObjectCategoryDto;
//# sourceMappingURL=update-object_category.dto.js.map