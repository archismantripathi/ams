"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutineModule = void 0;
const common_1 = require("@nestjs/common");
const routine_service_1 = require("./routine.service");
const routine_controller_1 = require("./routine.controller");
const mongoose_1 = require("@nestjs/mongoose");
const routine_model_1 = require("../../models/routine.model");
const routine_repository_1 = require("./routine.repository");
let RoutineModule = class RoutineModule {
};
RoutineModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Routine', schema: routine_model_1.RoutineSchema }]),
        ],
        controllers: [routine_controller_1.RoutineController],
        providers: [routine_service_1.RoutineService, routine_repository_1.RoutineRepository],
    })
], RoutineModule);
exports.RoutineModule = RoutineModule;
//# sourceMappingURL=routine.module.js.map