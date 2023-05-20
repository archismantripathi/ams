"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExtensionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_extension_dto_1 = require("./create-extension.dto");
class UpdateExtensionDto extends (0, mapped_types_1.PartialType)(create_extension_dto_1.CreateExtensionDto) {
}
exports.UpdateExtensionDto = UpdateExtensionDto;
//# sourceMappingURL=update-extension.dto.js.map