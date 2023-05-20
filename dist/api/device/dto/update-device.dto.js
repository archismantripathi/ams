"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeviceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_device_dto_1 = require("./create-device.dto");
class UpdateDeviceDto extends (0, mapped_types_1.PartialType)(create_device_dto_1.CreateDeviceDto) {
}
exports.UpdateDeviceDto = UpdateDeviceDto;
//# sourceMappingURL=update-device.dto.js.map