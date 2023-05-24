"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoutineDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_routine_dto_1 = require("./create-routine.dto");
class UpdateRoutineDto extends (0, mapped_types_1.PartialType)(create_routine_dto_1.CreateRoutineDto) {
}
exports.UpdateRoutineDto = UpdateRoutineDto;
//# sourceMappingURL=update-routine.dto.js.map