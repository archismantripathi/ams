"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionModule = void 0;
const common_1 = require("@nestjs/common");
const extension_service_1 = require("./extension.service");
const extension_controller_1 = require("./extension.controller");
const mongoose_1 = require("@nestjs/mongoose");
const device_model_1 = require("../../models/device.model");
let ExtensionModule = class ExtensionModule {
};
ExtensionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Device', schema: device_model_1.DeviceSchema }]),
        ],
        controllers: [extension_controller_1.ExtensionController],
        providers: [extension_service_1.ExtensionService]
    })
], ExtensionModule);
exports.ExtensionModule = ExtensionModule;
//# sourceMappingURL=extension.module.js.map