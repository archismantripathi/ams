"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutineSchema = void 0;
const mongoose = require("mongoose");
exports.RoutineSchema = new mongoose.Schema({
    routineId: { type: String, required: true, unique: true },
    routineName: { type: String, required: true },
    routineDescription: { type: String },
    routineConnector: { type: String, required: true },
    routineDevice: { type: String, required: true },
    trigger: {
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
    },
    routineData: {
        state: { type: Boolean, required: true },
        intensity: { type: Number, required: true },
    },
    routinePreviousData: {
        state: { type: Boolean },
        intensity: { type: Number },
    }
});
//# sourceMappingURL=routine.model.js.map