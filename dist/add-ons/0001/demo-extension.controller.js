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
exports.DemoExtensionController = void 0;
const demo_extension_service_1 = require("./demo-extension.service");
const common_1 = require("@nestjs/common");
const createDevice_dto_1 = require("./dto/createDevice.dto");
const updateDevice_dto_1 = require("./dto/updateDevice.dto");
const setDevice_dto_1 = require("./dto/setDevice.dto");
let DemoExtensionController = class DemoExtensionController {
    constructor(demoExtensionService) {
        this.demoExtensionService = demoExtensionService;
    }
    getAllLocal() {
        return this.demoExtensionService.getAllLocal();
    }
    getStatus(deviceId) {
        return this.demoExtensionService.getStatus(deviceId);
    }
    setDevice(deviceId, setDeviceDto) {
        return this.demoExtensionService.setDevice(deviceId, setDeviceDto);
    }
    newDevice(deviceType, createDeviceDto) {
        return this.demoExtensionService.addDevice(deviceType, createDeviceDto);
    }
    updateDevice(deviceId, updateDeviceDto) {
        return this.demoExtensionService.updateDevice(deviceId, updateDeviceDto);
    }
    deleteDevice(deviceId) {
        return this.demoExtensionService.deleteDevice(deviceId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DemoExtensionController.prototype, "getAllLocal", null);
__decorate([
    (0, common_1.Get)(':deviceId'),
    __param(0, (0, common_1.Param)('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DemoExtensionController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Patch)('set/:deviceId'),
    __param(0, (0, common_1.Param)('deviceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, setDevice_dto_1.SetDeviceDto]),
    __metadata("design:returntype", void 0)
], DemoExtensionController.prototype, "setDevice", null);
__decorate([
    (0, common_1.Post)(':deviceType'),
    __param(0, (0, common_1.Param)('deviceType')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, createDevice_dto_1.CreateDeviceDto]),
    __metadata("design:returntype", void 0)
], DemoExtensionController.prototype, "newDevice", null);
__decorate([
    (0, common_1.Patch)(':deviceId'),
    __param(0, (0, common_1.Param)('deviceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateDevice_dto_1.UpdateDeviceDto]),
    __metadata("design:returntype", void 0)
], DemoExtensionController.prototype, "updateDevice", null);
__decorate([
    (0, common_1.Delete)(':deviceId'),
    __param(0, (0, common_1.Param)('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DemoExtensionController.prototype, "deleteDevice", null);
DemoExtensionController = __decorate([
    (0, common_1.Controller)('api/extension/0001'),
    __metadata("design:paramtypes", [demo_extension_service_1.DemoExtensionService])
], DemoExtensionController);
exports.DemoExtensionController = DemoExtensionController;
//# sourceMappingURL=demo-extension.controller.js.map