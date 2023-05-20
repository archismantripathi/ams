"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceSchema = void 0;
const mongoose = require("mongoose");
exports.DeviceSchema = new mongoose.Schema({
    deviceId: { type: String, required: true, unique: true },
    deviceName: { type: String, required: true },
    deviceDescription: { type: String, required: true },
    deviceType: { type: String, required: true },
    deviceConnector: { type: String, required: true },
    deviceIp: { type: String, required: true },
    deviceStatus: { type: Boolean, required: true },
});
//# sourceMappingURL=device.model.js.map