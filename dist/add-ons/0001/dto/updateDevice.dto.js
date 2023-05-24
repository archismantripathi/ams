"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeviceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createDevice_dto_1 = require("./createDevice.dto");
class UpdateDeviceDto extends (0, mapped_types_1.PartialType)(createDevice_dto_1.CreateDeviceDto) {
}
exports.UpdateDeviceDto = UpdateDeviceDto;
//# sourceMappingURL=updateDevice.dto.js.map