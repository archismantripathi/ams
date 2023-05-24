"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutineController = void 0;
const common_1 = require("@nestjs/common");
const routine_service_1 = require("./routine.service");
const create_routine_dto_1 = require("./dto/create-routine.dto");
const update_routine_dto_1 = require("./dto/update-routine.dto");
let RoutineController = class RoutineController {
    constructor(routineService) {
        this.routineService = routineService;
    }
    createRoutine(createRoutineDto) {
        return this.routineService.createRoutine(createRoutineDto);
    }
    getAllRoutine() {
        return this.routineService.getAllRoutine();
    }
    findOneRoutine(routineId) {
        return this.routineService.getRoutine(routineId);
    }
    updateRoutine(routineId, updateRoutineDto) {
        return this.routineService.updateRoutine(routineId, updateRoutineDto);
    }
    removeRoutine(routineId) {
        return this.routineService.removeRoutine(routineId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_routine_dto_1.CreateRoutineDto]),
    __metadata("design:returntype", void 0)
], RoutineController.prototype, "createRoutine", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutineController.prototype, "getAllRoutine", null);
__decorate([
    (0, common_1.Get)(':routineId'),
    __param(0, (0, common_1.Param)('routineId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoutineController.prototype, "findOneRoutine", null);
__decorate([
    (0, common_1.Patch)(':routineId'),
    __param(0, (0, common_1.Param)('routineId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_routine_dto_1.UpdateRoutineDto]),
    __metadata("design:returntype", void 0)
], RoutineController.prototype, "updateRoutine", null);
__decorate([
    (0, common_1.Delete)(':routineId'),
    __param(0, (0, common_1.Param)('routineId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoutineController.prototype, "removeRoutine", null);
RoutineController = __decorate([
    (0, common_1.Controller)('api/routine'),
    __metadata("design:paramtypes", [routine_service_1.RoutineService])
], RoutineController);
exports.RoutineController = RoutineController;
//# sourceMappingURL=routine.controller.js.map