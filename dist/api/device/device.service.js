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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceService = void 0;
const common_1 = require("@nestjs/common");
const device_repository_1 = require("./device.repository");
let DeviceService = class DeviceService {
    constructor(deviceRepository) {
        this.deviceRepository = deviceRepository;
    }
    async getAllDevice() {
        return { data: await this.deviceRepository.getAllDevice() };
    }
    async getDevice(deviceId) {
        return { data: await this.deviceRepository.getDevice(deviceId) };
    }
    async createDevice(createDeviceDto) {
        return this.deviceRepository.createDevice(createDeviceDto);
    }
    async updateDevice(deviceId, updateDeviceDto) {
        return this.deviceRepository.updateDevice(deviceId, updateDeviceDto);
    }
    async deleteDevice(deviceId) {
        return this.deviceRepository.deleteDevice(deviceId);
    }
};
DeviceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [device_repository_1.DeviceRepository])
], DeviceService);
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map