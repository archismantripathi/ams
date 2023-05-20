"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionSchema = void 0;
const mongoose = require("mongoose");
exports.ExtensionSchema = new mongoose.Schema({
    extensionId: { type: String, required: true, unique: true },
    extensionName: { type: String, required: true },
    extensionDescription: { type: String, required: true },
});
//# sourceMappingURL=extension.model.js.map