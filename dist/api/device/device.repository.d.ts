import { Model } from 'mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from '../../models/device.model';
export declare class DeviceRepository {
    private readonly deviceModel;
    constructor(deviceModel: Model<Device>);
    getAllDevice(): Promise<{
        deviceId: string;
        deviceName: string;
        deviceDescription: string;
        deviceType: string;
        deviceConnector: string;
        deviceIp: string;
        deviceStatus: boolean;
    }[]>;
    getDevice(deviceId: string): Promise<{
        deviceId: string;
        deviceName: string;
        deviceDescription: string;
        deviceType: string;
        deviceConnector: string;
        deviceIp: string;
        deviceStatus: boolean;
    }>;
    createDevice(createDeviceDto: CreateDeviceDto): Promise<void>;
    updateDevice(deviceId: string, updateDeviceDto: UpdateDeviceDto): Promise<void>;
    deleteDevice(deviceId: string): Promise<void>;
}
