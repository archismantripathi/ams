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
exports.DemoExtensionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let DemoExtensionService = class DemoExtensionService {
    constructor(deviceModel, c0001Model) {
        this.deviceModel = deviceModel;
        this.c0001Model = c0001Model;
    }
    async getAllLocal() {
        const devices = await this.c0001Model.find().exec();
        return devices.map((device) => ({
            deviceId: device.deviceId,
            deviceType: device.deviceType,
            data: {
                state: device.data.state,
                intensity: device.data.intensity
            }
        }));
    }
    async getStatus(deviceId) {
        const res = await this.c0001Model
            .findOne({ deviceId: deviceId })
            .exec();
        if (res) {
            return { data: res.data };
        }
        else {
            throw new common_1.NotFoundException('Device Not Found.');
        }
    }
    async setDevice(deviceId, setDeviceDto) {
        const res = await this.c0001Model
            .findOne({ deviceId: deviceId })
            .exec();
        if (res) {
            res.data.state = setDeviceDto.state;
            res.data.intensity = setDeviceDto.intensity;
            try {
                res.save();
            }
            catch (error) {
                throw new common_1.HttpException('⚠️ Try Again.', common_1.HttpStatus.EXPECTATION_FAILED);
            }
            throw new common_1.HttpException('✅ State Change Success.', common_1.HttpStatus.ACCEPTED);
        }
        else {
            throw new common_1.NotFoundException('Device Not Found.');
        }
    }
    async updateDevice(deviceId, updateDeviceDto) {
        const device = await this.deviceModel.findOne({ deviceId: deviceId }).exec();
        if (device) {
            if (updateDeviceDto.deviceName) {
                device.deviceName = updateDeviceDto.deviceName;
            }
            if (updateDeviceDto.deviceDescription) {
                device.deviceDescription = updateDeviceDto.deviceDescription;
            }
            if (updateDeviceDto.deviceIp) {
                device.deviceIp = updateDeviceDto.deviceIp;
            }
            device.save();
            throw new common_1.HttpException('✅ Device Updated.', common_1.HttpStatus.ACCEPTED);
        }
        else {
            throw new common_1.NotFoundException('⚠️ Device Not Found.');
        }
    }
    async addDevice(deviceType, createDeviceDto) {
        const newDevice = new this.deviceModel({
            deviceId: createDeviceDto.deviceId,
            deviceName: createDeviceDto.deviceName,
            deviceDescription: createDeviceDto.deviceDescription,
            deviceType: deviceType,
            deviceConnector: '0001',
            deviceIp: createDeviceDto.deviceIp,
            deviceStatus: true,
        });
        try {
            await newDevice.save();
        }
        catch (error) {
            console.log(error);
            throw new common_1.NotAcceptableException('Device Already Exist.');
        }
        const newC0001Entry = new this.c0001Model({
            deviceId: createDeviceDto.deviceId,
            deviceType: deviceType,
            data: {
                state: false,
                intensity: 100
            }
        });
        try {
            await newC0001Entry.save();
        }
        catch (error) {
            throw new common_1.HttpException('⚠️ Unknown Error. Re-add Device.', common_1.HttpStatus.PARTIAL_CONTENT);
        }
        throw new common_1.HttpException('✅ Device Created.', common_1.HttpStatus.CREATED);
    }
    async deleteDevice(deviceId) {
        const result = await this.deviceModel
            .deleteOne({ deviceId: deviceId })
            .exec();
        if (result.acknowledged == false) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        else if (result.deletedCount == 0) {
            throw new common_1.NotFoundException('⚠️ Device Not Found.');
        }
        const resultC0001 = await this.c0001Model
            .deleteOne({ deviceId: deviceId })
            .exec();
        if (resultC0001.acknowledged == false) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        else if (resultC0001.deletedCount == 0) {
            throw new common_1.NotFoundException('⚠️ Device Not Found.');
        }
        throw new common_1.HttpException('⚠️ Device Removed.', common_1.HttpStatus.ACCEPTED);
    }
};
DemoExtensionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Device')),
    __param(1, (0, mongoose_2.InjectModel)('C0001')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], DemoExtensionService);
exports.DemoExtensionService = DemoExtensionService;
//# sourceMappingURL=demo-extension.service.js.map