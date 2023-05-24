"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C0001Schema = void 0;
const mongoose = require("mongoose");
exports.C0001Schema = new mongoose.Schema({
    deviceId: { type: String, required: true, unique: true },
    deviceType: { type: String, required: true },
    data: {
        state: { type: Boolean, required: true },
        intensity: { type: Number, required: true },
    }
});
//# sourceMappingURL=C0001.model.js.map