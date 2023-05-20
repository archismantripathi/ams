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
exports.DeviceRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DeviceRepository = class DeviceRepository {
    constructor(deviceModel) {
        this.deviceModel = deviceModel;
    }
    async getAllDevice() {
        const devices = await this.deviceModel.find().exec();
        return devices.map((device) => ({
            deviceId: device.deviceId,
            deviceName: device.deviceName,
            deviceDescription: device.deviceDescription,
            deviceType: device.deviceType,
            deviceConnector: device.deviceConnector,
            deviceIp: device.deviceIp,
            deviceStatus: device.deviceStatus,
        }));
    }
    async getDevice(deviceId) {
        const device = await this.deviceModel.findOne({ deviceId: deviceId }).exec();
        if (device) {
            return {
                deviceId: device.deviceId,
                deviceName: device.deviceName,
                deviceDescription: device.deviceDescription,
                deviceType: device.deviceType,
                deviceConnector: device.deviceConnector,
                deviceIp: device.deviceIp,
                deviceStatus: device.deviceStatus,
            };
        }
        else {
            throw new common_1.NotFoundException('Device Not Found.');
        }
    }
    async createDevice(createDeviceDto) {
        const newDevice = new this.deviceModel({
            deviceId: createDeviceDto.deviceId,
            deviceName: createDeviceDto.deviceName,
            deviceDescription: createDeviceDto.deviceDescription,
            deviceType: createDeviceDto.deviceType,
            deviceConnector: createDeviceDto.deviceConnector,
            deviceIp: createDeviceDto.deviceIp,
            deviceStatus: createDeviceDto.deviceStatus,
        });
        try {
            await newDevice.save();
        }
        catch (error) {
            throw new common_1.NotAcceptableException('Device Already Exist.');
        }
        throw new common_1.HttpException('Device Created.', common_1.HttpStatus.CREATED);
    }
    async updateDevice(deviceId, updateDeviceDto) {
        const device = await this.deviceModel.findOne({ deviceId: deviceId }).exec();
        if (device) {
            if (updateDeviceDto.deviceName) {
                device.deviceName = updateDeviceDto.deviceName;
            }
            if (updateDeviceDto.deviceConnector) {
                device.deviceConnector = updateDeviceDto.deviceConnector;
            }
            if (updateDeviceDto.deviceDescription) {
                device.deviceDescription = updateDeviceDto.deviceDescription;
            }
            if (updateDeviceDto.deviceType) {
                device.deviceType = updateDeviceDto.deviceType;
            }
            if (updateDeviceDto.deviceIp) {
                device.deviceIp = updateDeviceDto.deviceIp;
            }
            device.save();
            throw new common_1.HttpException('Device Updated.', common_1.HttpStatus.ACCEPTED);
        }
        else {
            throw new common_1.NotFoundException('Device Not Found.');
        }
    }
    async deleteDevice(deviceId) {
        const result = await this.deviceModel
            .deleteOne({ deviceId: deviceId })
            .exec();
        if (result.acknowledged == false) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        else if (result.deletedCount == 0) {
            throw new common_1.NotFoundException('Device Not Found.');
        }
        else {
            throw new common_1.HttpException('Device Removed.', common_1.HttpStatus.ACCEPTED);
        }
    }
};
DeviceRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Device')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DeviceRepository);
exports.DeviceRepository = DeviceRepository;
//# sourceMappingURL=device.repository.js.map