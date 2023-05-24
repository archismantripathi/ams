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
exports.RoutineRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RoutineRepository = class RoutineRepository {
    constructor(routineModel) {
        this.routineModel = routineModel;
    }
    async getAllRoutine() {
        const routines = await this.routineModel.find().exec();
        return routines.map((routine) => ({
            routineId: routine.routineId,
            routineName: routine.routineName,
            routineDescription: routine.routineDescription,
            routineConnector: routine.routineConnector,
            routineDevice: routine.routineDevice,
            startTime: routine.trigger.startTime,
            endTime: routine.trigger.endTime,
            state: routine.routineData.state,
            intensity: routine.routineData.intensity,
        }));
    }
    async getRoutine(routineId) {
        const routine = await this.routineModel.findOne({ routineId: routineId }).exec();
        return {
            routineId: routine.routineId,
            routineName: routine.routineName,
            routineDescription: routine.routineDescription,
            routineConnector: routine.routineConnector,
            routineDevice: routine.routineDevice,
            startTime: routine.trigger.startTime,
            endTime: routine.trigger.endTime,
            state: routine.routineData.state,
            intensity: routine.routineData.intensity,
        };
    }
    async createRoutine(createRoutineDto) {
        const newRoutine = new this.routineModel({
            routineId: createRoutineDto.routineId,
            routineName: createRoutineDto.routineName,
            routineDescription: createRoutineDto.routineDescription,
            routineConnector: createRoutineDto.routineConnector,
            routineDevice: createRoutineDto.routineDevice,
            trigger: {
                startTime: createRoutineDto.startTime,
                endTime: createRoutineDto.endTime,
            },
            routineData: {
                state: createRoutineDto.state,
                intensity: createRoutineDto.intensity,
            }
        });
        try {
            await newRoutine.save();
        }
        catch (error) {
            throw new common_1.NotAcceptableException('⚠️ Routine Already Exist.');
        }
        throw new common_1.HttpException('✅ Routine Created.', common_1.HttpStatus.CREATED);
    }
    async deleteRoutine(routineId) {
        const result = await this.routineModel
            .deleteOne({ routineId: routineId })
            .exec();
        if (result.acknowledged == false) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        else if (result.deletedCount == 0) {
            throw new common_1.NotFoundException('⚠️ Routine Not Found.');
        }
        else {
            throw new common_1.HttpException('⚠️ Routine Erased.', common_1.HttpStatus.ACCEPTED);
        }
    }
    async updateRoutine(routineId, updateRoutineDto) {
        const routine = await this.routineModel.findOne({ routineId: routineId }).exec();
        if (routine) {
            if (updateRoutineDto.routineName) {
                routine.routineName = updateRoutineDto.routineName;
            }
            if (updateRoutineDto.routineDescription) {
                routine.routineDescription = updateRoutineDto.routineDescription;
            }
            if (updateRoutineDto.startTime) {
                routine.trigger.startTime = updateRoutineDto.startTime;
            }
            if (updateRoutineDto.endTime) {
                routine.trigger.endTime = updateRoutineDto.endTime;
            }
            routine.routineData.state = updateRoutineDto.state;
            if (updateRoutineDto.intensity) {
                routine.routineData.intensity = updateRoutineDto.intensity;
            }
            routine.save();
            throw new common_1.HttpException('✅ Routine Updated.', common_1.HttpStatus.ACCEPTED);
        }
        else {
            throw new common_1.NotFoundException('⚠️ Routine Not Found.');
        }
    }
};
RoutineRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Routine')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoutineRepository);
exports.RoutineRepository = RoutineRepository;
//# sourceMappingURL=routine.repository.js.map