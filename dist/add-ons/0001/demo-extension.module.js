"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoExtensionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const demo_extension_service_1 = require("./demo-extension.service");
const demo_extension_controller_1 = require("./demo-extension.controller");
const C0001_model_1 = require("./local-model/C0001.model");
const device_model_1 = require("../../models/device.model");
let DemoExtensionModule = class DemoExtensionModule {
};
DemoExtensionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'C0001', schema: C0001_model_1.C0001Schema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Device', schema: device_model_1.DeviceSchema }]),
        ],
        providers: [demo_extension_service_1.DemoExtensionService],
        controllers: [demo_extension_controller_1.DemoExtensionController],
    })
], DemoExtensionModule);
exports.DemoExtensionModule = DemoExtensionModule;
//# sourceMappingURL=demo-extension.module.js.map